import {Router} from 'express';

abstract class AutoRouter {
  router: Router = Router();

  /**
   * Base path for all the routes
   */
  abstract path: string;

  /**
   * Register each endpoint with Router
   */
  abstract init();
}

export default AutoRouter;