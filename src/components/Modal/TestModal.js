import React, {Component} from "react";
import {connect} from "react-redux";
import Modal from "./Modal";

import {closeModal} from "./../../actions/index";

const actions = {closeModal};

export class TestModal extends Component {
    render() {
        return (
            <Modal>
              <h1>Working!</h1>
              <button onClick={() => closeModal()}></button>
            </Modal>
        )
    }
}

export default connect(null, actions)(TestModal);
