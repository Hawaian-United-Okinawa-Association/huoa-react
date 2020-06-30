//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

import DefaultModal from './../Modal/DefaultModal/DefaultModal';

const Footer = () => {
	const RenderDefaultModal = <DefaultModal />

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
			<button onClick={() => openModal(RenderDefaultModal)}>Click for Modal One.</button>
		</div>
	);
};

export default Footer;
