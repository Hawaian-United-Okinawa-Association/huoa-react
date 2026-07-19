import { TOGGLE_SCROLL } from '../actions/actionTypes';

const INITIAL_STATE = true;

const scrollReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SCROLL:
      return !state;
    default:
      return state;
  }
};

export default scrollReducer;
