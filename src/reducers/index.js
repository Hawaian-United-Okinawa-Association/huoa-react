import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';
import clubsReducer from './clubsReducer';
<<<<<<< HEAD
import scrollReducer from './scrollReducer';
=======
import settingsReducer from './settingsReducer';
>>>>>>> main

export default combineReducers({
  clubs: clubsReducer,
  events: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer,
<<<<<<< HEAD
  scroll: scrollReducer
=======
  settings: settingsReducer
>>>>>>> main
});
