// TODO: need to add logic that handles past events and add logic where we are only passing data from ACF

import { GET_EVENTS } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const INITIAL_STATE = {};

const getEventsReducer = (state, payload) => {
  return payload;
};

export default createReducer(INITIAL_STATE, {
  [GET_EVENTS] : getEventsReducer
});
