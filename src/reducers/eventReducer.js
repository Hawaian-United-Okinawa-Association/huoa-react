// import { CREATE_EVENT, FETCH_EVENT, FETCH_EVENTS, EDIT_EVENT, DELETE_EVENT } from '../actions/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
    case 'FETCH_EVENTS':
      return {
        ...state,
        events: action.events
      }

  default:
    return state;
  }
};
