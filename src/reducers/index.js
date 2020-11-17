import { combineReducers } from 'redux';
import donationReducer from './donationReducer';
import eventReducer from './eventReducer';
import modalReducer from './modalReducer';
import pagesReducer from './pagesReducer';
import routerReducer from './routerReducer';

export default combineReducers({
  donation: donationReducer,
  event: eventReducer,
  router: routerReducer,
  modals: modalReducer,
  pages: pagesReducer
});
