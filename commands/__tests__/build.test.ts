jest.mock('@zg-rentals/app');
jest.mock('@zg-rentals/webpack');
jest.mock('../../webpack.config.ts');
jest.mock('@zg-rentals/webpack');

import { handler } from '../build';
import createWebpackConfig from '../../webpack.config';
import { startWebpackBuild } from '@zg-rentals/webpack';
import path from 'path';

describe('build', () => {
  const workspaceRoot = path.join(__dirname, '../..');

  test('runs the webpack config', async () => {
    const chdir = jest.spyOn(process, 'chdir').mockImplementation(() => {});

    await handler();

    expect(chdir).toHaveBeenCalledWith(workspaceRoot);
    expect(createWebpackConfig).toHaveBeenCalledTimes(1);
  });

  test('starts the webpack build', async () => {
    const chdir = jest.spyOn(process, 'chdir').mockImplementation(() => {});

    await handler();

    expect(chdir).toHaveBeenCalledWith(workspaceRoot);
    expect(startWebpackBuild).toHaveBeenCalledTimes(1);
  });
});
