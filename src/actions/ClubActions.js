import { FETCH_CLUBS } from './actionTypes'
import axios from 'axios'

const api = 'https://dev.huoa.org/wp-json';

export const getClubs = () => async (dispatch) => {
    const response = await axios.get(`${api}/wp/v2/clubs`);
    // const data = response.data.reduce((allData, { slug, title, acf }) => ({ ...allData, [slug]: { title: title.rendered, ...acf }}), {});
    // console.log(response)
    dispatch({ type: FETCH_CLUBS, payload: response.data });
  };