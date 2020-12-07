import { GET_NAV } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const INITIAL_STATE = [];

const getNavReducer = (state, payload) => {
  return payload;
};

export default createReducer(INITIAL_STATE, {
  [GET_NAV] : getNavReducer
});
