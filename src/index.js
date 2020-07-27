// NPM Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// TODO: "react-loadable" for code-splitting

//Components, config, utils, etc.
import App from './base/App';
import configureStore from './store/configureStore';
import './index.scss';
import './resources/font';

const store = configureStore(window.__REDUX_STATE__ || {});

const Main = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

if (process.env.NODE_ENV === 'production') {
  window.onload = async () => {
    ReactDOM.hydrate(
      Main,
      document.getElementById('root')
    );
  };
} else {
  ReactDOM.render(
    Main,
    document.getElementById('root')
  );
}
