import axios from "axios";

import {
  FETCH_CLUBS,
  GET_PAGES,
  GET_HEROS,
  GET_EVENTS,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "./actionTypes";

const api = "https://dev.huoa.org/wp-json";
let isProd =
  process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap";

export const getPages = () => async (dispatch) => {
  if (isProd) {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_PAGES, payload: cache.pages });
  } else {
    try {
      const response = await axios.get(
        `${api}/wp/v2/pages?page=1&per_page=100`
      );
      const data = response.data.reduce(
        (allData, { slug, title, acf }) => ({
          ...allData,
          [slug]: { title: title.rendered, ...acf },
        }),
        {}
      );

      dispatch({ type: GET_PAGES, payload: data });
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
      const response = await axios.get(
        `${api}/wp/v2/clubs?&page=1&per_page=100&orderby=slug&order=asc`
      );

      dispatch({ type: FETCH_CLUBS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getHeros = () => async (dispatch) => {
  if (isProd) {
    let cache = window.__REDUX_STATE__;

    dispatch({ type: GET_HEROS, payload: cache.heros });
  } else {
    try {
      const { data } = await axios.get(
        `${api}/wp/v2/heros?page=1&per_page=100`
      );

      dispatch({ type: GET_HEROS, payload: data });
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
