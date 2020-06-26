//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

const Footer = () => {
	const dispatch = useDispatch();

	const openModal = (modalType) => {
		dispatch({
			type: 'MODAL_OPEN',
			payload: {
				modalType: modalType,
				modalProps: {
					a: 46
				}
			}
		})
	}

	return (
		<div>
			<h4>Footer</h4>
			<button onClick={() => openModal('TestModal')}>Click for Modal One.</button>
			<button onClick={() => openModal('TestModalTwo')}>Click for Modal Two.</button>
		</div>
	);
};

export default Footer;
