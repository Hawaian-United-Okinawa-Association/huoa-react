//Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { openModal } from './../../actions/index';

const actions = { openModal };

const Footer = (props) => {
	const onOpenModalClicked = () => {
		openModal("TestModal", { a : 42});
	}

	return (
		<div>
			<h4>Footer</h4>
			<button onClick={() => onOpenModalClicked()}>Click for modal.</button>
		</div>
	);
};

export default connect(null, actions)(Footer);
