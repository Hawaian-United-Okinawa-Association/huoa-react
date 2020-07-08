//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import DropDownMenu from './DropDownMenu';
import logo from '../../assets/huoa-logo.png';
import './Navbar.scss';

const Navbar = () => {
  const navState = useSelector((state) => state.nav);

  const hasDropdown = (children) => {
    if (children.length) {
      return <DropDownMenu items={children} />;
    }
  };

  const renderNavItems = (items) => {
    return items.map((item) => {
      return (
        <NavItem name={item.name} linkTo={item.linkTo}>
          {hasDropdown(item.children)}
        </NavItem>
      );
    });
  };

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
        <ul className="nav-links">{renderNavItems(navState.navItems)}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
