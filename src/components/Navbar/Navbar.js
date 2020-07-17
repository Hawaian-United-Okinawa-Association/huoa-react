//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import DropDownMenu from './DropDownMenu';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const routerState = useSelector((state) => state.router);

  const hasDropdown = (children) => {
    if (children.length) {
      return <DropDownMenu items={children} />;
    }
  };

  const renderNavItems = (items) => {
    return items.map((item) => {
      return (
        <NavItem name={item.name} linkTo={item.linkTo} key={item.linkTo}>
          {hasDropdown(item.children)}
        </NavItem>
      );
    });
  };

  return (
    <nav className="nav">
      <div className="nav--container">
        <Link className="nav--container" to="/">
          <HUOALogo className="nav--logo" alt="HUOA Logo" />
          <div className="nav--titles">
            <h2 className="nav--title">Hawaii United Okinawa Association</h2>
            <h5 className="nav--title__sm">Celebrating 120 years of Uchinanchu in Hawaii</h5>
          </div>
        </Link>
      </div>
      <ul className="nav--links">{renderNavItems(routerState.routes)}</ul>
    </nav>
  );
};

export default Navbar;
