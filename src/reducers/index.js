import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import donationReducer from './donationReducer';
import volunteerReducer from './volunteerReducer';
import subscribeReducer from './subscribeReducer';
import newsReducer from './newsReducer';
import rentReducer from './rentReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  donation: donationReducer,
  event: eventReducer,
  volunteer: volunteerReducer,
  subscribe: subscribeReducer,
  news: newsReducer,
  rent: rentReducer,
  modals: modalReducer
});
