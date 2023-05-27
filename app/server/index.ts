import express from 'express';

let server = require('./server').default;

/* eslint-disable no-console */
if (module.hot) {
  module.hot.accept('./server', function () {
    console.log(`HMR reloading ./server ...`);
    try {
      server = require('./server').default;
    } catch (err) {
      console.log(err);
    }
  });
  console.log('✅ server HMR enabled');
}

const port = process.env.PORT;

export default express()
  .use((req, res) => server.handle(req, res))
  .listen(port, () => {
    // eslint-disable-next-line no-console
    console.log({
      port,
      msg: 'server started',
    });
  });
