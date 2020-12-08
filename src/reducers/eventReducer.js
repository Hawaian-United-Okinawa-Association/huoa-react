// TODO: need to add logic that handles past events and add logic where we are only passing data from ACF

import { GET_EVENTS } from '../actions/actionTypes';

const getEventsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

export default getEventsReducer;
