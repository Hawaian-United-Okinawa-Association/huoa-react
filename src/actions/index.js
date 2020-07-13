import { SET_ACTIVE_MENU, MODAL_OPEN, MODAL_CLOSE } from './actionTypes';

//Nav Actions
export const setActiveMenu = (menu) => {
  return {
    type: SET_ACTIVE_MENU,
    payload: menu
  };
};

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
