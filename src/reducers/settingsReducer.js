import { GET_SETTINGS } from '../actions/actionTypes';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SETTINGS:
      return action.payload;
    default:
      return state;
  }
};