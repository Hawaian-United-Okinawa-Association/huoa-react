import React from 'react';

import './Modal.scss'

import TestModal from './TestModal';
import TestModalTwo from './TestModalTwo';

const Modal = (props) => {
    let renderedModal;
    if (props.type === 'TestModal') renderedModal = <TestModal />
    else if (props.type === 'TestModalTwo') renderedModal = <TestModalTwo />

    return (
      <div className='modal'>
        <div className='modal--overlay'></div>
        <div className='modal--content'>
          <div>{ renderedModal }</div>
        </div>
      </div>
    )
}

export default Modal;
