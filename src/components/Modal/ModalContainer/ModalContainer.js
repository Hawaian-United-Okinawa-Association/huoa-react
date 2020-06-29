import React from 'react';

import './ModalContainer.scss'

const Modal = (props) => {
    return (
      <div className='modal-container'>
        <div className='modal-container--overlay'></div>
        <div className='modal-container--content'>
          <div>{ props.content }</div>
        </div>
      </div>
    )
}

export default Modal;
