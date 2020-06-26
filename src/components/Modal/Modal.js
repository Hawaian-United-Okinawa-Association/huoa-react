import React from 'react';

import './Modal.scss'

const Modal = (props) => {
    return (
      <div className='modal'>
        <div className='modal--overlay'></div>
        <div className='modal--content'>
          { props.children }
        </div>
      </div>
    )
}

export default Modal;
