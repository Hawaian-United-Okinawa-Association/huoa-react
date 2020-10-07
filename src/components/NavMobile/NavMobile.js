//Dependencies
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import Button from '../Button/Button';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { ReactComponent as ButtonClose } from '../../assets/button-close.svg';
import { ReactComponent as Carrot } from '../../assets/carrot.svg';
import './NavMobile.scss';

const NavMobile = () => {
  const [ navState, setNavState ] = useState(false);
  const [ activeDropdown, setActiveDropdown ] = useState(null);
  const { routes } = useSelector((state) => state.router);

  const mobileRoutes = routes.filter((item) => item.name !== 'Donate');
  mobileRoutes.unshift({ name: 'Home', linkTo: '/' });

  useEffect(() => {
    console.log(`NavState is now ${navState}`);
  });

  const renderDropdown = (items) => {
    return items.map((item) => {
      return (
        <Link to={item.linkTo}>
          <li className="nav-mobile__sidebar--dropdown">{item.name}</li>
        </Link>
      );
    });
  };

  const renderSideItems = (items) => {
    return items.map((item) => {
      return (
        <React.Fragment>
          <Link
            to={item.children ? '#!' : item.linkTo}
            key={item.linkTo}
            navState={navState}
            setNavState={setNavState}
            className="nav-mobile__sidebar--item"
          >
            <li>{item.name}</li>
            {item.children ? (
              <Carrot onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} />
            ) : null}
          </Link>
          {activeDropdown === item.name ? renderDropdown(item.children) : null}
        </React.Fragment>
      );
    });
  };

  const renderSideNav = () => {
    return (
      <div className="nav-mobile__sidebar">
        <ButtonClose onClick={() => setNavState(!navState)} className="nav-mobile__sidebar--close" />
        <ul className="nav-mobile__sidebar--items">{renderSideItems(mobileRoutes)}</ul>
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
    );
  };

  return (
    <React.Fragment>
      <nav className="nav-mobile">
        <div className="nav-mobile__header">
          <HUOALogo height="90" width="90" />
          <div className="nav-mobile__titles">
            <h2 className="nav-mobile__title">Hawaii United Okinawa Association</h2>
            <h5 className="nav-mobile__title--sm">Celebrating 120 years of Uchinanchu in Hawaii</h5>
          </div>
        </div>
        <Hamburger onClick={() => setNavState(!navState)} />
        {navState && renderSideNav()}
      </nav>
    </React.Fragment>
  );
};

export default NavMobile;
