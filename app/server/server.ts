import express from 'express';
import cookieParser from 'cookie-parser';
import { getHttpLogger } from '@zg-rentals/logger-node';
import cors from 'cors';
import type { NextFunction, Request, Response } from 'express';

import monitorMiddleware from './middleware/nodeMonitor';
import log from './utils/log';
import createHealthcheck from './middleware/healthcheck';
import { tracer } from './utils/tracer';

// GraphQL
import { ApolloServer } from 'apollo-server-express';
import schema from '../graphql/federatedSchema';

const step = log.child({ name: 'server' });

step.warn('running server');

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const token = req.cookies;

    return {
      token,
    };
  },
  introspection: __DEV__,
  playground: __DEV__,
});

// Express
const app = express();
const healthcheck = createHealthcheck(log.child({ name: 'healthcheck' }));

const httpLogger = getHttpLogger({
  logger: log,
});

// must bind 'this' because of JS
monitorMiddleware(app);

tracer.traceApp(app);

if (__DEV__) {
  const corsOptions = {
    // @ts-ignore expect-any
    origin: (origin, callback) => {
      callback(null, origin);
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.use(cookieParser());
app.use(httpLogger);
app.use(`*/check`, tracer.wrap(healthcheck.check as (...args: Array<unknown>) => unknown, 'healthcheck'));
app.use(`*/shutdown`, healthcheck.shutdown);
app.get(`/`, (req, res) => {
  step.warn(req.cookies, 'Cookies');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`Rent Guarantee Express Server Response!`);
  res.end();
});

tracer.errorMiddleware();

// Express error handler - catches any express error uncaught by a middleware function
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  log.error(err);
  res.status(500);
  next();
});

server.applyMiddleware({ app, path: '/rent-guarantee-graphql/graphql', cors: false });

export default app;
