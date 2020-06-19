//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return (
			<div>
				<h1>Testing Github FTP Deploys</h1>
				<Link to="/">
					<h4>HUOA Home</h4>
				</Link>
				<ul>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/join">
						<li>Get Involved</li>
					</Link>
					<Link to="/events">
						<li>Events</li>
					</Link>
					<Link to="/ogsh">
						<li>OGSH</li>
					</Link>
					<Link to="/news">
						<li>News</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
					<Link to="/donate">
						<li>Donate</li>
					</Link>
				</ul>
			</div>
		);
	}
}

export default Navbar;
