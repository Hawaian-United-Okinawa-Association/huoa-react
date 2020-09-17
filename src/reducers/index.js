import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import heroReducer from './heroReducer';
import volunteerReducer from './volunteerReducer';
import subscribeReducer from './subscribeReducer';
import newsReducer from './newsReducer';
import rentReducer from './rentReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';

export default combineReducers({
  heros: heroReducer,
  event: eventReducer,
  volunteer: volunteerReducer,
  subscribe: subscribeReducer,
  news: newsReducer,
  rent: rentReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer
});
