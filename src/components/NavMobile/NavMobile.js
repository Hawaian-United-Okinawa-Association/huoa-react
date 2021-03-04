//Dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { toggleScroll } from '../../actions/index.js';
import Button from '../Button/Button';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { ReactComponent as ButtonClose } from '../../assets/button-close.svg';
import { ReactComponent as Carrot } from '../../assets/carrot.svg';
import './NavMobile.scss';

const NavMobile = () => {
  const dispatch = useDispatch();
  const [ navState, setNavState ] = useState(false);
  const [ activeDropdown, setActiveDropdown ] = useState(false);
  const { routes } = useSelector((state) => state.router);

  const resetSideNav = () => {
    setNavState(false);
    setActiveDropdown(false);
  };

  const handleScroll = () => {
    if(window.screen.width < 768) dispatch(toggleScroll());
  };

  const renderDropdown = (items) => {
    return items.map((item) => {
      return (
        <Link to={item.slug} key={item.slug} onClick={() => resetSideNav()}>
          <li className="nav-mobile__sidebar--dropdown-item">{item.title}</li>
        </Link>
      );
    });
  };

  const renderSideItems = (items) => {
    items.filter((item) => item.title !== 'Donate');

    return items.map((item) => {
      const dropBool = activeDropdown === item.title;

      return item.slug !== 'donate' && (
        <div key={item.slug} onClick={item.children ? () => setActiveDropdown(dropBool ? null : item.title) : () => resetSideNav() }>
          <Link to={item.children ? '' : item.slug} className="nav-mobile__sidebar--item">
            <li>{item.title}</li>
            {item.children[0] && (
              <Carrot
                className={`nav-mobile__sidebar--carrot${dropBool ? '--active' : ''}`}
              />
            )}
          </Link>
          <div className={`nav-mobile__sidebar--dropdown${dropBool ? '--active' : '--inactive'}`}>
            {renderDropdown(item.children)}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className="nav-mobile">
        <Link to='/'>
        <div className="nav-mobile__header">
          <HUOALogo className="nav-mobile__logo" height="90" width="90" />
          <div className="nav-mobile__titles">
            <div className="nav-mobile__title">Hawaii United Okinawa Association</div>
            <div className="nav-mobile__title--sm">Promote, perpetuate, and preserve the Okinawan culture here in Hawaii</div>
          </div>
        </div>
        </Link>
        <Hamburger className="nav-mobile__hamburger" onClick={() => {setNavState(true); handleScroll();}} />
        <div className={`nav-mobile__sidebar${navState ? '--active' : '--inactive'}`} >
          <ButtonClose onClick={() => {resetSideNav(); handleScroll();}} className="nav-mobile__navclose" />
          <ul className="nav-mobile__sidebar--items">{!!routes && renderSideItems(routes)}</ul>
          <hr className="nav-mobile__sidebar--break" />
          <div className="nav-mobile__sidebar--footer">
            <small className="nav-mobile__sidebar--footer-link">Rent Our Ballroom</small>
            <small className="nav-mobile__sidebar--footer-link">Join our Newsletter</small>
            <div className="nav-mobile__sidebar--footer-button">
              <Button type="filled" link="donate">
                  Donate  
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavMobile;
