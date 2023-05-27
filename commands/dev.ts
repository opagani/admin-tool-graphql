import { startWebpackWatch } from '@zg-rentals/webpack';
import webpack from 'webpack';
import { getChildLogger } from '@zg-rentals/logger-node';
import { loadDotEnv } from '@zg-rentals/app';
import path from 'path';
import createWebpackConfig from '../webpack.config';

export async function handler() {
  const workspaceRoot = path.join(__dirname, '..');

  process.env.ZG_ENV = process.env.ZG_ENV || 'local';

  loadDotEnv(workspaceRoot);

  const logger = getChildLogger('dev');

  process.env.PORT = process.env.PORT || '4000';
  process.env.API = process.env.API || 'https://comet1.testpads.net';
  process.env.LOG_LEVEL = process.env.LOG_LEVEL || 'info';

  process.chdir(workspaceRoot);

  const config = await createWebpackConfig({
    mode: 'development',
    publicPath: '',
    zgEnv: process.env.ZG_ENV,
  });

  const compiler = webpack(config);

  logger.info(JSON.stringify(process.env));

  await startWebpackWatch({
    compilers: new Map([['server', compiler]]),
    configs: new Map([['server', config]]),
    serverPort: parseInt(process.env.PORT),
  });
}
