//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const [ navState, setNavState ] = useState(false);
  const { routes } = useSelector((state) => state.router);

  const renderMenuItems = (children) => {
    return children.map((item) => (
      <Link className="nav--dropdown__link" to={item.linkTo} onClick={() => setNavState(false)} key={item.linkTo}>
        <li className="nav--dropdown__link--txt">{item.name}</li>
      </Link>
    ));
  };

  const dropdown = (children) => {
    if (children.length) {
      return (
        <div className="nav--dropdown">
          <ul className="nav--dropdown__links">{renderMenuItems(children)}</ul>
        </div>
      );
    }
  };

  const renderNavItems = (items) => {
    return items.map((item) => {
      return (
        <NavItem name={item.name} linkTo={item.linkTo} key={item.linkTo} navState={navState} setNavState={setNavState}>
          {dropdown(item.children)}
        </NavItem>
      );
    });
  };

  return (
    <nav className="nav--container">
      <div className="nav--container__sm">
        <Link to="/">
          <div className="nav--header">
            <HUOALogo className="nav--logo" />
            <div className="nav--titles">
              <h2 className="nav--title">Hawaii United Okinawa Association</h2>
              <h5 className="nav--title__sm">Celebrating 120 years of Uchinanchu in Hawaii</h5>
            </div>
          </div>
        </Link>
        <ul className="nav--items">{renderNavItems(routes)}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
