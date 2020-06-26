//Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Landing from 'pages/Landing/Landing';
import About from 'pages/About/About';
import Events from 'pages/Events/Events';
import News from 'pages/News/News';
import Contact from 'pages/Contact/Contact';
import Donate from 'pages/Donate/Donate';
import Geneology from 'pages/Geneology/Geneology';
import GetInvolved from 'pages/GetInvolved/GetInvolved';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/about" component={About} />
			<Route path="/events" component={Events} />
			<Route path="/join" component={GetInvolved} />
			<Route path="/news" component={News} />
			<Route path="/contact" component={Contact} />
			<Route path="/donate" component={Donate} />
			<Route path="/ogsh" component={Geneology} />
		</Switch>
	);
};

export default Routes;
