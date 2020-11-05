import { FETCH_CLUBS } from './actionTypes'
import axios from 'axios'

const api = 'https://dev.huoa.org/wp-json';

export const getClubs = () => async (dispatch) => {
    const response = await axios.get(`${api}/wp/v2/clubs`);
    dispatch({ type: FETCH_CLUBS, payload: response.data });
  };