import path from 'path';
import createWebpackConfig from '../webpack.config';
import { loadDotEnv } from '@zg-rentals/app';
import { startWebpackBuild } from '@zg-rentals/webpack';

export async function handler() {
  const workspaceRoot = path.join(__dirname, '..');

  process.env.ZG_ENV = process.env.ZG_ENV || 'local';

  loadDotEnv(workspaceRoot);

  process.env.BUILD_NUMBER = process.env.BUILD_NUMBER || Date.now().toString();

  process.chdir(workspaceRoot);

  const config = await createWebpackConfig({
    mode: 'production',
    buildNumber: parseInt(process.env.BUILD_NUMBER),
    publicPath: '',
    zgEnv: process.env.ZG_ENV,
  });

  await startWebpackBuild({
    configs: new Map([['server', config]]),
  });
}
