import { GET_PAGES } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const INITIAL_STATE = {};

const getPagesReducer = (state, payload) => {
  payload.reduce(
    (allData, { slug, title, acf }) => ({
      ...allData,
      [slug]: { title: title.rendered, ...acf },
    }),
    {}
  );
  return payload;
};

export default createReducer(INITIAL_STATE, {
  [GET_PAGES] : getPagesReducer
});
