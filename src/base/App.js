//Dependencies
import React from 'react';

//Components
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

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
