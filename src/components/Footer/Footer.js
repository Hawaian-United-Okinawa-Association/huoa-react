//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Twitter } from './../../assets/twitter.svg';
import { ReactComponent as Instagram } from './../../assets/instagram.svg';
import { ReactComponent as Facebook } from './../../assets/facebook.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--container">
        <div className="footer--links">
          <Link to="/contact" className="footer--link">Contact</Link>
          <Link to="/opportunities" className="footer--link">Opportunities</Link>
          <Link to="/get-invloved" className="footer--link">Get Involved</Link>
          <Link to="/events" className="footer--link">Events</Link>
          <Link to="/geneology" className="footer--link">Geneology</Link>
          <Link to="/news" className="footer--link">News</Link>
          <Link to="/donate" className="footer--link">Donate</Link>
        </div>
        <div className="footer--logo">Logo</div>
        <div className="footer--contact">
          <div className="footer--contact__col">
            <a href="https://goo.gl/maps/vPeokXPRG2e59jPS7" target="_blank" rel="noopener noreferrer">
              94-587 Ukeʻe Street Waipahu, HI 96797 808.676.5400
            </a>
          </div>
          <div className="footer--contact__col">Mon-Fri, 8:30 am - 5 pm Saturday & Sunday, Closed</div>
        </div>
        <div className="footer--social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter /></a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
