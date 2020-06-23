import huoa from '../api/huoa';
import { CREATE_EVENT, FETCH_EVENT, FETCH_EVENTS, DELETE_EVENT, EDIT_EVENT } from './types';

//Event Actions Examples
export const fetchEvents = () => async (dispatch) => {
	const res = await huoa.get('/events');

	dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const deleteEvent = (id) => async (dispatch) => {
	const res = await huoa.delete(`/events/${id}`);

	dispatch({ type: DELETE_EVENT, payload: id });
};
