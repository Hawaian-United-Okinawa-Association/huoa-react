import { GET_NEWSLETTERS } from '../actions/actionTypes';

const getNewslettersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NEWSLETTERS:
      return action.payload;
    default:
      return state;
  }
};

export default getNewslettersReducer;
