import { GET_PAGES } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const getPagesReducer = (state, payload) => {
  return payload.reduce(
    (allData, { id, slug, menu_order, title, acf, parent }) => ({
      ...allData,
      [slug]: {
        id: id,
        order: menu_order,
        title: title.rendered,
        navigation: parent,
        ...acf
      },
    }),
    {}
  );
};

export default createReducer({}, {
  [GET_PAGES] : getPagesReducer
});
