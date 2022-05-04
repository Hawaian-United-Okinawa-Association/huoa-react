//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from 'assets/huoa-logo.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Youtube } from 'assets/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-and-social"> 
        <Link to="/">
          <Logo className="footer__logo" />
        </Link>
        <div className="footer__social">
          <a
            href="https://www.youtube.com/c/HawaiiUnitedOkinawaAssociation"
            target="_blank"
            rel="noopener noreferrer"
            className='footer__element'
          >
            <Youtube className="footer__social-icon" />
          </a>
          <a
            href="https://www.instagram.com/hawaiiunitedokinawaassociation/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className='footer__element'
          >
            <Instagram className="footer__social-icon" />
          </a>
          <a
            href="https://www.facebook.com/HUOA.org/"
            target="_blank"
            rel="noopener noreferrer"
            className='footer__element'
          >
            <Facebook className="footer__social-icon" />
          </a>
        </div>
        </div>
        <div className='footer__links-and-contact'>
        <div className="footer__links">
          <h4>Links</h4>
          <Link to="/mission-purpose" className="footer__link">About</Link>
          <Link to="/clubs" className="footer__link">Clubs</Link>
          <Link to="/events" className="footer__link">Events</Link>
          <Link to="/contact" className="footer__link">Contact</Link>
          {/* TODO: this will be added back later so we'll comment these out for now */}
          {/* <Link to="/opportunities" className="footer__link">Opportunities</Link>
          <Link to="/events" className="footer__link">Events</Link>
          <Link to="/geneology" className="footer__link">Geneology</Link>
          <Link to="/news" className="footer__link">News</Link> */}
          <Link to="/donate" className="footer__link">Donate</Link>
          <a
            className="footer__link"
            href="https://huoa.tradewing.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyHUOA
          </a>
        </div>
        <div className="footer__contact">
          <div className="footer__contact--col">
            <div>
              <h4>Address</h4>
              <a
                href="https://goo.gl/maps/vPeokXPRG2e59jPS7"
                target="_blank"
                rel="noopener noreferrer"
                className='footer__link'
              >
                94-587 Ukeʻe Street <br/> Waipahu, HI 96797
              </a>
            </div> 
            <div>
              <h4>Phone</h4>
              <a href='tel:8086765400' target='_blank' rel="noopener noreferrer" className='footer__link'>808.676.5400</a>
            </div>
          </div>
          <div className="footer__contact--col">
            <div> 
              <h4>Hours Of Operation</h4>
              Mon-Fri, 8:30 am - 5 pm <br/>Saturday & Sunday, Closed
            </div>
            <div>
              <h4>Email</h4>
              <a href='mailto:info@huoa.org' target='_blank' rel="noopener noreferrer" className='footer__link'>info@huoa.org</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

