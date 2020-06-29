//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

import TestModal from './../Modal/TestModal/TestModal';
import TestModalTwo from './../Modal/TestModalTwo/TestModalTwo';

const Footer = () => {
	const RenderTestModal = <TestModal />
	const RenderTestModalTwo = <TestModalTwo />

	const dispatch = useDispatch();
	const openModal = (modalContent) => {
		dispatch({
			type: 'MODAL_OPEN',
			payload: {
				modalContent: modalContent
			}
		})
	}

	return (
		<div>
			<h4>Footer</h4>
			<button onClick={() => openModal(RenderTestModal)}>Click for Modal One.</button>
			<button onClick={() => openModal(RenderTestModalTwo)}>Click for Modal Two.</button>
		</div>
	);
};

export default Footer;
