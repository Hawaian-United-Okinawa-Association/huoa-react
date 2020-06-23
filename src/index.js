// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
//Components
import App from './base/App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.querySelector('#root')
);
