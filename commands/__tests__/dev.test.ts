jest.mock('@zg-rentals/app');
jest.mock('@zg-rentals/webpack');
jest.mock('../../webpack.config.ts');
jest.mock('@zg-rentals/webpack');
jest.mock('webpack');

import { handler } from '../dev';
import createWebpackConfig from '../../webpack.config';
import { startWebpackWatch } from '@zg-rentals/webpack';
import webpack from 'webpack';
import path from 'path';

describe('dev', () => {
  const workspaceRoot = path.join(__dirname, '../..');

  test('runs the webpack config', async () => {
    const chdir = jest.spyOn(process, 'chdir').mockImplementation(() => {});

    await handler();

    expect(chdir).toHaveBeenCalledWith(workspaceRoot);
    expect(createWebpackConfig).toHaveBeenCalledTimes(1);
  });

  test('creates the compiler and startWebpackWatch', async () => {
    const chdir = jest.spyOn(process, 'chdir').mockImplementation(() => {});

    await handler();

    expect(chdir).toHaveBeenCalledWith(workspaceRoot);
    expect(webpack).toHaveBeenCalledTimes(1);
    expect(startWebpackWatch).toHaveBeenCalledTimes(1);
    expect(startWebpackWatch).toHaveBeenLastCalledWith(
      expect.objectContaining({
        serverPort: 4000,
      }),
    );
  });
});
