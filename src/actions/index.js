import { MODAL_OPEN, MODAL_CLOSE, GET_PAGES } from './actionTypes';

import getAPIRoot from '../apis/content';
import axios from 'axios';

export const getPages = () => async (dispatch) => {
  const response = await axios.get(`${getAPIRoot}/wp/v2/pages?page=1&per_page=100`);
  const data = response.data.reduce((allData, data) => ({ ...allData, [data.slug]: { ...data.acf} }), {})
  dispatch({ type: GET_PAGES, payload: data });
};

export const openModal = (modalContent) => {
  return {
    type: MODAL_OPEN,
    payload: modalContent
  };
}

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
}

// Event Actions Examples

export const fetchEvents = () => async (dispatch) => {
  // const res = await content.get('/events');

  // dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const deleteEvent = (id) => async (dispatch) => {
  // const res = await content.delete(`/events/${id}`);

  // dispatch({ type: DELETE_EVENT, payload: id });
};