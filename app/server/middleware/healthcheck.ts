import type { Logger } from '@zg-rentals/logger-node';
import { Healthcheck } from '@zg-rentals/healthcheck';
0;

function createHealthcheck(logger: Logger) {
  const healthcheck = new Healthcheck({
    appName: __APP_NAME__,
    accessToken: 'changeit',
    logger: logger,
    buildNumber: parseInt(__BUILD_NUMBER__ || '-1', 10),
    onPing: ({ response, hasAccess }) => {
      return {
        ...response,
        ...(hasAccess ? { zgApi: process.env.ZG_API } : {}),
      };
    },
  });

  return healthcheck;
}

export default createHealthcheck;
