import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';
import clubsReducer from './clubsReducer';
import scrollReducer from './scrollReducer';
import settingsReducer from './settingsReducer';
import newslettersReducer from './newslettersReducer';

export default combineReducers({
  clubs: clubsReducer,
  events: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer,
  scroll: scrollReducer,
  newsletters: newslettersReducer,
  settings: settingsReducer
});
