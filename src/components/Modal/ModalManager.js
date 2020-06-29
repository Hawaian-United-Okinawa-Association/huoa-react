import React from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

const mapState = (state) => ({currentModal : state.modals});

const ModalManager = (props) => {
  const {currentModal} = props
  let renderedModal;
  if (currentModal) {
    const {modalType = {}} = currentModal;
    renderedModal = <Modal type={modalType} ></Modal>;
  }

  return (
    <div>{renderedModal}</div>
  )
}

export default connect(mapState)(ModalManager);
