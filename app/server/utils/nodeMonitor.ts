import env from 'env-var';

import log from '../../server/utils/log';

import {
  NodeMonitor,
  NodeMonitorPontoonReporter,
  NodeVitalsPlugin,
  PontoonHeartbeatPlugin,
} from '@zg-rentals/monitor-node';

const webappName = env.get('APP_NAME').asString();
const pontoonApi = env.get('PONTOON_API').asString();
const pontoonApiKey = env.get('PONTOON_API_KEY').asString();
const startupDate = env.get('APP_START_TIME').asInt() || Date.now();
const gitCommit = __GIT_COMMIT__;
const gitBranch = __GIT_BRANCH__;

// I'm using presence or lack of pontoon env vars to indicate env support -- could also be done through new env var PONTOON_ENABLED
const pontoonEnabled = pontoonApi && pontoonApiKey;

const plugins = [];
const reporters = [];

const monitorLogger = log.child({ name: 'monitor-node' });

if (pontoonEnabled) {
  const pontoonReporter = new NodeMonitorPontoonReporter({
    logger: monitorLogger,
    webappName: webappName as string,
    api: pontoonApi,
    apiKey: pontoonApiKey,
  });
  reporters.push(pontoonReporter);

  const pontoonHeartbeatPlugin = new PontoonHeartbeatPlugin({
    logger: monitorLogger,
    webappName: webappName as string,
    api: pontoonApi,
    apiKey: pontoonApiKey,
    startupDate,
    buildDate: typeof __BUILD_DATE__ === 'undefined' ? startupDate : parseInt(__BUILD_DATE__),
    buildId: parseInt(__BUILD_NUMBER__),
    commitId: gitCommit,
    gitBranch,
  });

  plugins.push(pontoonHeartbeatPlugin);
}

const nodeVitalsPlugin = new NodeVitalsPlugin({
  logger: monitorLogger,
  webappName: webappName as string,
  buildNumber: parseInt(__BUILD_NUMBER__),
  gitCommit,
});

plugins.push(nodeVitalsPlugin);

const nodeMonitor = new NodeMonitor({
  logger: monitorLogger,
  reporters,
  plugins,
});

export default nodeMonitor;
