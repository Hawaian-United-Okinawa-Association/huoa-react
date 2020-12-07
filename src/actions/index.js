import axios from 'axios';

import { GET_PAGES, GET_HEROS, GET_NAV, MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

const api = 'https://dev.huoa.org/wp-json';

export const getPages = () => async (dispatch) => {
  if (process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap") {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_PAGES, payload: cache.pages });
  } else {
    const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`);
    const data = response.data.reduce((allData, { slug, title, acf }) => ({ ...allData, [slug]: { title: title.rendered, ...acf }}), {});

    dispatch({ type: GET_PAGES, payload: data });
  }
};

export const getHeros = () => async (dispatch) => {
  if (process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap") {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_HEROS, payload: cache.heros });
  } else {
    const { data } = await axios.get(`${api}/wp/v2/heros?page=1&per_page=100`);

    dispatch({ type: GET_HEROS, payload: data });
  }
};

export const getNav = () => async (dispatch) => {
  if (process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap") {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_NAV, payload: cache.nav });
  } else {
    const response = await axios.get(`${api}/menus/v1/menus/main-navigation`);
    const data = response.data.items.map(item => {
      let children = false;
      if (item.child_items) {
        children = item.child_items.map(child => {
          return {
            linkTo: child.url,
            name: child.title,
          }
        })
      }
      return {
        linkTo: item.url,
        name: item.title,
        children: children,
      }
    });

    dispatch({ type: GET_NAV, payload: data });
  }
};

export const openModal = (modalContent) => {
  return {
    type: MODAL_OPEN,
    payload: modalContent
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
