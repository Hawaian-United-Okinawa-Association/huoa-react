//Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes />
			<Footer />
		</BrowserRouter>
	);
};

export default App;
