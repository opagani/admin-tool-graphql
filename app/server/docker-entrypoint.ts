import { setupEntrypoint } from '@zg-rentals/docker';
import path from 'path';

const root = path.join(process.cwd(), 'apps', 'rent-guarantee-graphql');
const serverPath = path.join(root, 'dist', 'server', 'index.js');

setupEntrypoint({
  root,
  serverPath,
  env: {
    ...process.env,
  },
});
