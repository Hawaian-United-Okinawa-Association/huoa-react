import React from 'react';

import './Modal.scss'

const Modal = (props) => {
  // if (props.show) {
    return (
      <div className='modal'>
        <div className='modal-overlay'></div>
        <div className='modal-content'>
          { props.children }
        </div>
      </div>
    )
  // } else {
  //   return null;
  // }
}

export default Modal;
