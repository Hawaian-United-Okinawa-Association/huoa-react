import { GET_ROUTER } from '../actions/actionTypes';
import { createReducer } from './reducerUtils';

const getRouterReducer = (state, payload) => {
  let keys = {};

  const routes = payload.reduce(
    (allData, { id, slug, menu_order, title, parent }) => {
      if (parent === 0) {
        keys[id] = menu_order;

        allData[menu_order] = {
          id: id,
          order: menu_order,
          slug: slug,
          title: title.rendered,
          children: []
        };

        return [ ...allData ];
      }

      allData[keys[parent]].children[menu_order] = {
        id: id,
        slug: slug,
        order: menu_order,
        title: title.rendered,
        parent: parent
      };

      return [ ...allData ];
    },
    []
  );

  routes.splice((routes.length - 1), 0, { slug: 'https://shophuoa.com/', title: 'Shop', children: []});
  routes.push({ slug: 'donate', title: 'Donate', children: []});

  return { routes: routes };
};

export default createReducer({}, {
  [GET_ROUTER] : getRouterReducer
});
