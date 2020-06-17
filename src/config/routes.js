//Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Landing from '../components/layouts/Landing';
import About from '../components/layouts/About';
import Events from '../components/layouts/Events';
import News from '../components/layouts/News';
import Contact from '../components/layouts/Contact';
import Donate from '../components/layouts/Donate';
import Geneology from '../components/layouts/Geneology';
import GetInvolved from '../components/layouts/GetInvolved';

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
