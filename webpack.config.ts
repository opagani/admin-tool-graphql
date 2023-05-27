import type { Configuration } from 'webpack';
import type { Logger } from '@zg-rentals/logger-node';

import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import { getWorkspaceGraph } from '@zg-rentals/workspace-graph';
import {
  createGraphqlRule,
  createJsRule,
  createMinimizer,
  createNodeBinaryRule,
  createPaths,
  TSCheckerPlugin,
} from '@zg-rentals/webpack';
import StartServerPlugin from 'start-server-webpack-plugin';
import path from 'path';
import { getChildLogger } from '@zg-rentals/logger-node';
import nodeExternals from 'webpack-node-externals';
import { git } from '@zg-rentals/cli-tools';

const app = 'rent-guarantee-graphql';

export default async function createWebpackConfig({
  mode,
  publicPath,
  buildNumber,
  logger = getChildLogger('createWebpackConfig'),
  repoRoot = '../../',
  zgEnv,
}: {
  mode: 'development' | 'production';
  publicPath: string;
  buildNumber?: number;
  repoRoot?: string;
  logger?: Logger;
  zgEnv: string;
}): Promise<Configuration> {
  const isDev = mode === 'development';
  const workspaceGraph = getWorkspaceGraph(repoRoot);
  const workspace = workspaceGraph.getWorkspace(app);
  const paths = createPaths({
    nodeEntry: 'app/server/index.ts',
    nodeOutput: 'dist/server',
  });

  const config: Configuration = {
    context: process.cwd(),
    mode: mode,
    target: 'node',
    node: {
      __console: false,
      __dirname: false,
      __filename: false,
    },
    externals: [
      nodeExternals({
        allowlist: [/^@zg-rentals/],
        additionalModuleDirs: [path.resolve(__dirname, '..', '..', 'node_modules')],
      }),
    ],
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    resolve: {
      modules: ['node_modules'],
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json', '.graphql', '.gql', '.node'],
    },
    resolveLoader: {
      modules: [workspace.resolvePath('node_modules'), workspace.resolvePathFromRoot('node_modules')],
    },
    module: {
      strictExportPresence: true,
      rules: [createJsRule({ logger }), createGraphqlRule({ logger }), createNodeBinaryRule({ logger })],
    },
    optimization: {
      usedExports: true,
      minimize: !isDev,
      minimizer: isDev ? [createMinimizer({})] : [],
    },
    plugins: [
      TSCheckerPlugin(),
      new DefinePlugin({
        __APP_NAME__: JSON.stringify('rent-guarantee-graphql'),
        __BUILD_NUMBER__: JSON.stringify(buildNumber),
        __BUILD_DATE__: JSON.stringify(Date.now()),
        __DEV__: JSON.stringify(isDev),
        __PROD__: JSON.stringify(!isDev),
        __ZG_ENV__: JSON.stringify(zgEnv),
        __GIT_COMMIT__: JSON.stringify(process.env.GIT_COMMIT || (await git.getCurrentSha())),
        __GIT_BRANCH__: JSON.stringify(process.env.GIT_BRANCH || (await git.getCurrentBranch())),
      }),
      ...(isDev
        ? [
            new HotModuleReplacementPlugin(),
            new StartServerPlugin({
              name: 'index.js',
              nodeArgs: ['--trace-warnings'],
              signal: false,
            }),
          ]
        : []),
    ],
    entry: {
      index: [paths.nodeEntry],
      'docker-entrypoint': [path.join(__dirname, 'app', 'server', 'docker-entrypoint.ts')],
    },
    output: {
      path: paths.nodeOutput,
      publicPath,
      pathinfo: true,
      libraryTarget: 'var',
      filename: '[name].js',
    },
  };

  logger.debug(config);
  return config;
}
