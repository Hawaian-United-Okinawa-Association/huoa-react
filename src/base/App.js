//Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import ModalManager from './../components/Modal/ModalManager'
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

import { openModal, closeModal } from './../actions/index.js'

const actions = { openModal, closeModal };

const App = (props) => {
	return (
		<main>
			<ModalManager/>
			<Navbar />
			<Routes />
			<Footer />
    </main>
	);
};

export default connect(null, actions)(App);
