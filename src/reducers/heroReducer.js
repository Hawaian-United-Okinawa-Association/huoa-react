import { GET_HEROS } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const INITIAL_STATE = {};

const getHerosReducer = (state, payload) => {
  return payload;
};

export default createReducer(INITIAL_STATE, {
  [GET_HEROS] : getHerosReducer
});
