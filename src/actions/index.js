import { useDispatch } from 'react-redux';
import axios from 'axios';
import { GET_PAGES, FETCH_CLUBS, MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

const api = 'https://dev.huoa.org/wp-json';

export const Initialize = () => { 

  const getPages = () => async (dispatch) => {
    const response = await axios.get(`${api}/wp/v2/pages?page=1&per_page=100`);
    const data = response.data.reduce((allData, { slug, title, acf }) => ({ ...allData, [slug]: { title: title.rendered, ...acf }}), {});
    dispatch({ type: GET_PAGES, payload: data });
  };
  
  const getClubs = () => async (dispatch) => {
    const response = await axios.get(`${api}/wp/v2/clubs`);
    dispatch({ type: FETCH_CLUBS, payload: response.data });
  };
  
  const dispatch = useDispatch();
  dispatch(getClubs());
  dispatch(getPages());
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
