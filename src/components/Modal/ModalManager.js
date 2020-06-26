import React, {Component} from "react";
import { connect } from "react-redux";

import TestModal from "./TestModal";
import TestModalTwo from "./TestModalTwo";

const modalComponentLookupTable = {
    TestModal,
    TestModalTwo
};

const mapState = (state) => ({currentModal : state.modals});

export class ModalManager extends Component {
    render() {
        const {currentModal} = this.props;

        let renderedModal;
        if(currentModal) {
            const {modalType, modalProps = {}} = currentModal;
            const ModalComponent = modalComponentLookupTable[modalType];

            renderedModal = <ModalComponent {...modalProps} />;
        }

        return <span>{renderedModal}</span>
    }
}

export default connect(mapState)(ModalManager);
