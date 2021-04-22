import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';
import clubsReducer from './clubsReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
  clubs: clubsReducer,
  events: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer,
  settings: settingsReducer
});
