import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';
import navReducer from './navReducer';

export default combineReducers({
  heros: heroReducer,
  event: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer,
  nav: navReducer
});
