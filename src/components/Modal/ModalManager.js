import React from 'react';
import { connect } from 'react-redux';

import TestModal from './TestModal';
import TestModalTwo from './TestModalTwo';

const modalComponentLookupTable = {
    TestModal,
    TestModalTwo
};

const mapState = (state) => ({currentModal : state.modals});

const ModalManager = (props) => {
  const {currentModal} = props
  let renderedModal;
  if (currentModal) {
    const {modalType, modalProps = {}} = currentModal;
    const ModalComponent = modalComponentLookupTable[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }

  return (
    <div>{renderedModal}</div>
  )
}

export default connect(mapState)(ModalManager);
