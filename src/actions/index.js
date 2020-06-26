import content from '../apis/content';
import { CREATE_EVENT, FETCH_EVENT, FETCH_EVENTS, DELETE_EVENT, EDIT_EVENT, MODAL_CLOSE, MODAL_OPEN } from './actionTypes';

//Event Actions Examples
export const fetchEvents = () => async (dispatch) => {
	const res = await content.get('/events');

	dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const deleteEvent = (id) => async (dispatch) => {
	const res = await content.delete(`/events/${id}`);

	dispatch({ type: DELETE_EVENT, payload: id });
};

export const openModal = (modalType, modalProps) => {
	console.log('hits openModal action')
	console.log(modalType);
	console.log(modalProps);
	return {
		type: MODAL_OPEN,
		payload: { modalType, modalProps }
	};
}

export const closeModal = () => {
	return {
		type: MODAL_CLOSE
	};
}
