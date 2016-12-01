import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import AutoRouter from "./AutoRouter";

class ExpressApplication {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({extended: false}));
  }

  private routes(): void {
    // Iterate through all files in routes directory and register them. These files must extend AutoRouter.
    let routesDirectory = path.join(__dirname, 'routes');
    fs.readdir(routesDirectory, (err, files) => {
      files.forEach((file) => {
        let router: AutoRouter = require("./routes/" + file).default;
        router.init();
        this.express.use(router.path, router.router);
      });
    })
  }

}

export default new ExpressApplication().express;