import React from 'react';
import { connect } from 'react-redux';

import DefaultModal from './DefaultModal/DefaultModal';

import './Modal.scss'

const mapState = (state) => ({currentModal : state.modals});

const Modal = (props) => {
  const {currentModal} = props

  if (currentModal) {
    const {modalContent = {}} = currentModal;

    return (
      <div className='modal'>
        <div className='modal--overlay'></div>
        <div className='modal--content'>
          <DefaultModal content={modalContent} />
        </div>
      </div>
    )
  }
  return null;
}

export default connect(mapState)(Modal);
