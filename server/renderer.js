import fs from 'fs';
import path from 'path';

import React from 'react'
import ReactDOMServer from 'react-dom/server'
// TODO: for code spitting import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router';

import App from '../src/base/App';

const renderer = (store) => (req, res, next) => {
  const file = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(file, 'utf8', (err, htmlData) => {
    try {
      const modules = [];
      const routerContext = {};
      const reduxState = JSON.stringify(store.getState());

      // TODO: <Loadable.Capture report={m => modules.push(m)}></Loadable.Capture> for code splitting

      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.baseUrl} context={routerContext}>
            <App/>
          </StaticRouter>
        </Provider>
      );

      // TODO: this needs javascript serializer for layer of security

      return res.send(
        htmlData
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace('__REDUX_STATE__={}', `__REDUX_STATE__=${reduxState}`)
      );
    } catch (err) {
      return res.status(404).end();
    }
  });
};

export default renderer;
