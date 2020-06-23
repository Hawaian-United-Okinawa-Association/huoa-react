import content from '../apis/content';
import { CREATE_EVENT, FETCH_EVENT, FETCH_EVENTS, DELETE_EVENT, EDIT_EVENT } from './actionTypes';

//Event Actions Examples
export const fetchEvents = () => async (dispatch) => {
	const res = await content.get('/events');

	dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const deleteEvent = (id) => async (dispatch) => {
	const res = await content.delete(`/events/${id}`);

	dispatch({ type: DELETE_EVENT, payload: id });
};
