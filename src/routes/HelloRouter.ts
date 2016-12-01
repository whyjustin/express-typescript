import {Router, Request, Response, NextFunction} from 'express';
import AutoRouter from '../AutoRouter'

export class HelloRouter extends AutoRouter {
  router: Router = Router();
  path: string = '/api/v1/hello';

  public init(): void {
    this.router.get('/', HelloRouter.get);
  }

  public static get(req: Request, res: Response, next: NextFunction): void {
    res.send({
      message: 'hello world'
    });
  }
}

export default new HelloRouter();