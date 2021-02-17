import axios from "axios";

import {
  FETCH_CLUBS,
  GET_PAGES,
  GET_ROUTER,
  GET_EVENTS,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "./actionTypes";

const api = "https://dev.huoa.org/wp-json";
let isProd = process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap";

export const getPages = () => async (dispatch) => {
  if (isProd) {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_PAGES, payload: cache.pages });
    dispatch({ type: GET_ROUTER, payload: cache.pages });
  } else {
    try {
      // TODO: we need to check if there is more than 100 pages then we need to paginate
      const { data } = await axios.get(
        `${api}/wp/v2/pages?page=1&per_page=100&orderby=parent&order=asc`
      );

      dispatch({ type: GET_PAGES, payload: data });
      dispatch({ type: GET_ROUTER, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getClubs = () => async (dispatch) => {
  if (isProd) {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: FETCH_CLUBS, payload: cache.clubs });
  } else {
    try {
      // TODO: we need to check if there is more than 100 clubs then we need to paginate
      const { data } = await axios.get(
        `${api}/wp/v2/clubs?&page=1&per_page=100&orderby=slug&order=asc`
      );

      dispatch({ type: FETCH_CLUBS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getEvents = () => async (dispatch) => {
  if (isProd) {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_EVENTS, payload: cache.events });
  } else {
    try {
      const { data } = await axios.get(
        `${api}/wp/v2/events?page=1&per_page=100`
      );

      dispatch({ type: GET_EVENTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const openModal = (modalContent) => {
  return {
    type: MODAL_OPEN,
    payload: modalContent,
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE,
  };
};
