//Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Landing from '../layouts/Landing';
import About from '../layouts/About';
import Events from '../layouts/Events';
import News from '../layouts/News';
import Contact from '../layouts/Contact';
import Donate from '../layouts/Donate';
import Geneology from '../layouts/Geneology';
import GetInvolved from '../layouts/GetInvolved';

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
