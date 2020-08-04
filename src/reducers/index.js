import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import donationReducer from './donationReducer';
import volunteerReducer from './volunteerReducer';
import subscribeReducer from './subscribeReducer';
import newsReducer from './newsReducer';
import rentReducer from './rentReducer';
import modalReducer from './modalReducer';
<<<<<<< HEAD
import routerReducer from './routerReducer';
=======
import pagesReducer from './pagesReducer';
>>>>>>> main

export default combineReducers({
  donation: donationReducer,
  event: eventReducer,
  volunteer: volunteerReducer,
  subscribe: subscribeReducer,
  news: newsReducer,
  rent: rentReducer,
  modals: modalReducer,
<<<<<<< HEAD
  router: routerReducer
=======
  pages: pagesReducer
>>>>>>> main
});
