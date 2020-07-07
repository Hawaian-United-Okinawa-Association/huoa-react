import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './../../actions/index';

import { ReactComponent as Close } from './../../assets/Close.svg';
import './Modal.scss';

const Modal = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modals);

  if (modalState) {
    return (
      <div className='modal'>
        <div className='modal--overlay' onClick={() => dispatch(closeModal())}></div>
        <div className='modal--container'>
          <Close className='modal--close' onClick={() => dispatch(closeModal())}/>
          <div className='modal--content'>
            { modalState }
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default Modal;
