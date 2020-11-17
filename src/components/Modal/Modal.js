import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './../../actions/index';

import { ReactComponent as ButtonClose } from './../../assets/button-close.svg';

const Modal = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modals);

  if (modalState) {
    return (
      <div className='modal'>
        <div className='modal__overlay' onClick={() => dispatch(closeModal())}></div>
        <div className='modal__container'>
          <ButtonClose className='modal__close' onClick={() => dispatch(closeModal())} />
          <div className='modal__body'>
            { modalState }
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default Modal;
