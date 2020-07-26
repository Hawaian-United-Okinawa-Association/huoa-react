import { SET_ACTIVE_MENU, MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

//Modal Actions
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
