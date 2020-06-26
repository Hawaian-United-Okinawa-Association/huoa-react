import { MODAL_CLOSE, MODAL_OPEN } from './../actions/actionTypes';

const INITIAL_STATE = null;

const createReducer = (initialState, fnMap) => {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  }
}

export function openModal(state, payload) {
  const {modalType, modalProps} = payload;
  return {modalType, modalProps}
};

export function closeModal(state, payload) {
  return null;
}

export default createReducer(INITIAL_STATE, {
  [MODAL_OPEN] : openModal,
  [MODAL_CLOSE] : closeModal
})
