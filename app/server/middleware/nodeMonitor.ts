import type { NextFunction, ParamsDictionary, Request, Response } from 'express-serve-static-core';
import type { ParsedQs } from 'qs';
import nodeMonitor from '../utils/nodeMonitor';

export default (app: {
  use: (
    arg0: (
      req: Request<ParamsDictionary, unknown, unknown, ParsedQs, Record<string, unknown>>,
      res: Response<unknown, Record<string, unknown>, number>,
      next: NextFunction,
    ) => Promise<void>,
  ) => void;
}) => {
  app.use(nodeMonitor.onRequest.bind(nodeMonitor));
};
