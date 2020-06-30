import React from 'react';
import { connect } from 'react-redux';

import DefaultModal from './DefaultModal/DefaultModal';

const mapState = (state) => ({currentModal : state.modals});

const Modal = (props) => {
  const {currentModal} = props

  return (<div>{ currentModal ? <DefaultModal content={currentModal.modalContent} /> : null}</div>)
}

export default connect(mapState)(Modal);
