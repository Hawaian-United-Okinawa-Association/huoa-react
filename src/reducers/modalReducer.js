import { MODAL_CLOSE, MODAL_OPEN } from './../actions/actionTypes';
import { createReducer } from './reducerUtils';

const INITIAL_STATE = null;

const openModalReducer = (state, payload) => {
  return payload;
};

const closeModalReducer = (state, payload) => {
  return null;
}

export default createReducer(INITIAL_STATE, {
  [MODAL_OPEN] : openModalReducer,
  [MODAL_CLOSE] : closeModalReducer
})
