//Dependencies
import React from 'react';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './config/routes';

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
