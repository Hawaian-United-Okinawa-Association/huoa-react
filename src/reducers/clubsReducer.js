import {FETCH_CLUBS} from '../actions/actionTypes';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      return action.payload;
    default:
      return state;
  }
};
