//Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';

const Navbar = () => {
  const [ navState, setNavState ] = useState(false);
  const navRoutes = useSelector((state) => state.nav);

  const renderMenuItems = (children) => {
    return children.map(item => {
      return (
        <Link
          className="navbar__dropdown--link"
          to={item.linkTo}
          onClick={() => setNavState(false)}
          key={item.linkTo}
          data-text={item.name}
        >
          {item.name}
        </Link>
      )
    })
  };

  const renderNavItems = (items) => {
    return items.map(item => {
      return (
        <NavItem name={item.name} linkTo={item.linkTo} key={item.linkTo} navState={navState} setNavState={setNavState}>
          {!!item.children && (
            <div className="navbar__dropdown">
              <ul className="navbar__dropdown--links">{renderMenuItems(item.children)}</ul>
            </div>
          )}
        </NavItem>
      );
    });
  };

  return (
    <nav className="navbar__container">
      <div className="navbar__container--sm" onMouseLeave={() => setNavState(false)}>
        <Link to="/">
          <div className="navbar__header">
            <HUOALogo className="navbar__logo" />
            <div className="navbar__titles">
              <h2 className="navbar__title">Hawaii United Okinawa Association</h2>
              <h5 className="navbar__title--sm">Celebrating 120 years of Uchinanchu in Hawaii</h5>
            </div>
          </div>
        </Link>
        <ul className="navbar__items" onMouseLeave={() => setNavState(false)}>
          {renderNavItems(navRoutes)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
