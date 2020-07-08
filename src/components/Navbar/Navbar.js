//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//Components, assets, actions, etc..
import logo from '../../assets/huoa-logo.png';

//styles
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-brand">
        <div className="nav-img">
          <Link to="/">
            <img className="nav-logo" src={logo} />
          </Link>
        </div>
        <div className="nav-text">
          <h4>Hawaii United Okinawa Association</h4>
          <p>Celebrating 120 years of Uchinanchu in Hawaii</p>
        </div>
      </div>
      <div className="nav-block">
        <ul className="nav-links">
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
          <Link className="donate-btn" to="/donate">
            <li className="donate-btn-txt">Donate</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

const navItems = [
  {
    name: 'About',
    linkTo: '/about',
    children: []
  },
  {
    name: 'Get Involved',
    linkTo: null,
    children: [
      {
        name: 'Join a HUOA Club',
        linkTo: '/about/clubs'
      },
      {
        name: 'Okinawan Art Directory',
        linkTo: '/about/art'
      },
      {
        name: 'Club Sports',
        linkTo: '/about/sports'
      }
    ]
  },
  {
    name: 'Events',
    linkTo: '/events'
  },
  {
    name: 'Geneology',
    linkTo: '/geneology'
  },
  {
    name: 'News',
    linkTo: '/news'
  },
  {
    name: 'Contact Us',
    linkTo: '/contact'
  },
  {
    name: 'Donate',
    linkTo: '/donate'
  }
];

export default Navbar;
