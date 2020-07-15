import { SET_ACTIVE_MENU } from '../actions/actionTypes';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return { ...state, activeMenu: action.payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  activeMenu: false
};
