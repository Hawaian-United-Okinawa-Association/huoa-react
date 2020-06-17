//Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Landing from '../components/layouts/Landing';

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/about" component={Landing} />
			<Route path="/events" component={Landing} />
			<Route path="/news" component={Landing} />
			<Route path="/contact" component={Landing} />
			<Route path="/donate" component={Landing} />
			<Route path="/geneology" component={Landing} />
		</Switch>
	);
};

export default Routes;
