// NPM Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//Components, config, utils, etc.
import App from './base/App';
import configureStore from './store/configureStore';
import './resources/font';
import './index.scss';

const preloadedState = window.__REDUX_STATE__;
// Allow the passed state to be garbage-collected
delete window.__REDUX_STATE__;

const store = configureStore(preloadedState || {});

window.snapSaveState = () => ({
  __REDUX_STATE__: store.getState()
});

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
