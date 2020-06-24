import path from 'path';
import express from 'express';

import serverRenderer from './renderer';
import configureStore from '../src/store/configureStore';

const server = express();
const PORT = process.env.PORT || 3001;

const renderReact = (req, res, next) => {
  const store = configureStore();

  serverRenderer(store)(req, res, next)
};

server.use('^/$', renderReact);

server.use(express.static(
  (path.resolve(__dirname, '..', 'build')),
  { maxAge: '30d'}
));

server.use('*', renderReact);

server.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
