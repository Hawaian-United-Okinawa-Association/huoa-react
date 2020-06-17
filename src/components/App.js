//Dependencies
import React from 'react';

//Components
import Navbar from './Navbar';
import Footer from './Footer';
import Routes from '../config/routes';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes />
			<Footer />
		</div>
	);
};

export default App;
