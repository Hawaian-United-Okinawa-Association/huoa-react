//Dependencies
import React from 'react';

//Components
import ModalManager from './../components/Modal/ModalManager'
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

const App = () => {
	return (
		<main>
			<ModalManager />
			<Navbar />
			<Routes />
			<Footer />
    </main>
	);
};

export default App;
