import { combineReducers } from 'redux';
import heroReducer from './heroReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';
import clubsReducer from './clubsReducer';

export default combineReducers({
  clubs: clubsReducer,
  heros: heroReducer,
  events: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer
});
