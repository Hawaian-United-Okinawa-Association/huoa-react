import React from 'react';
import { connect } from 'react-redux';

import ModalContainer from './ModalContainer/ModalContainer';

const mapState = (state) => ({currentModal : state.modals});

const ModalManager = (props) => {
  const {currentModal} = props
  let renderedModal;
  if (currentModal) {
    const {modalContent = {}} = currentModal;
    renderedModal = <ModalContainer content={modalContent} />;
  }

  return (
    <div>{renderedModal}</div>
  )
}

export default connect(mapState)(ModalManager);
