import axios from "axios";

import {
  FETCH_CLUBS,
  GET_PAGES,
  GET_ROUTER,
  GET_EVENTS,
  MODAL_OPEN,
  MODAL_CLOSE,
  TOGGLE_SCROLL,
  GET_SETTINGS,
  GET_NEWSLETTERS,
} from "./actionTypes";

const api = "https://dev.huoa.org/wp-json";
let isProd = process.env.NODE_ENV === "production" && navigator.userAgent !== "ReactSnap";
// Under react-snap, read the collections prefetched to build/snap-data instead of
// refetching from dev.huoa.org on every route (see scripts/snap-prefetch.js).
const isSnap = navigator.userAgent === "ReactSnap";
const snapData = (name) => `/snap-data/${name}.json`;

// Prerendered pages inline their data as window.__REDUX_STATE__, but a page may
// ship un-prerendered or with an empty slice. Return null in those cases so the
// caller refetches instead of throwing on undefined and rendering nothing.
const cached = (key) => {
  const state = typeof window !== "undefined" ? window.__REDUX_STATE__ : null;
  const slice = state ? state[key] : null;
  if (!slice) return null;
  const empty = Array.isArray(slice)
    ? slice.length === 0
    : typeof slice === "object" && Object.keys(slice).length === 0;
  return empty ? null : slice;
};

export const getPages = () => async (dispatch) => {
  const pages = isProd && cached("pages");
  const router = isProd && cached("router");
  if (pages && router) {
    dispatch({ type: GET_PAGES, payload: pages });
    dispatch({ type: GET_ROUTER, payload: router });
  } else {
    try {
      // TODO: we need to check if there is more than 100 pages then we need to paginate
      const { data } = await axios.get(
        isSnap ? snapData("pages") : `${api}/wp/v2/pages?page=1&per_page=100&orderby=parent&order=asc`
      );

      dispatch({ type: GET_PAGES, payload: data });
      dispatch({ type: GET_ROUTER, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getClubs = () => async (dispatch) => {
  const clubs = isProd && cached("clubs");
  if (clubs) {
    dispatch({ type: FETCH_CLUBS, payload: clubs });
  } else {
    try {
      // TODO: we need to check if there is more than 100 clubs then we need to paginate
      const { data } = await axios.get(
        isSnap ? snapData("clubs") : `${api}/wp/v2/clubs?&page=1&per_page=100&orderby=slug&order=asc`
      );

      dispatch({ type: FETCH_CLUBS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getEvents = () => async (dispatch) => {
  const events = isProd && cached("events");
  if (events) {
    dispatch({ type: GET_EVENTS, payload: events });
  } else {
    try {
      const { data } = await axios.get(
        isSnap ? snapData("events") : `${api}/wp/v2/events?page=1&per_page=100&orderby=date&order=asc`
      );

      dispatch({ type: GET_EVENTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getNewsletters = () => async (dispatch) => {
  const newsletters = isProd && cached("newsletters");
  if (newsletters) {
    dispatch({ type: GET_NEWSLETTERS, payload: newsletters });
  } else {
    try {
      const { data } = await axios.get(
        isSnap ? snapData("newsletters") : `${api}/wp/v2/newsletters?page=1&per_page=100&orderby=slug&order=desc`
      );

      dispatch({ type: GET_NEWSLETTERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getSettings = () => async (dispatch) => {
  const settings = isProd && cached("settings");
  if (settings) {
    dispatch({ type: GET_SETTINGS, payload: settings });
  } else {
    try {
      const { data } = await axios.get(
        isSnap ? snapData("settings") : `${api}`
      );

      dispatch({ type: GET_SETTINGS, payload: {title: data.name, description: data.description} });
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

export const toggleScroll = () => {
  return {
    type: TOGGLE_SCROLL
  };
};
