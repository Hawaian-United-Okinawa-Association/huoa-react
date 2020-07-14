//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import DropDownMenu from './DropDownMenu';
import logo from '../../assets/huoa-logo.svg';
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
        <NavItem name={item.name} linkTo={item.linkTo}>
          {hasDropdown(item.children)}
        </NavItem>
      );
    });
  };

  return (
    <nav className="nav">
      <div className="nav--container">
        <Link className="nav--container" to="/">
          <img className="nav--logo" src={logo} alt="HUOA Logo" />
          <div className="nav--txt">
            <h4 className="nav--txt__title">Hawaii United Okinawa Association</h4>
            <p className="nav--txt__body">Celebrating 120 years of Uchinanchu in Hawaii</p>
          </div>
        </Link>
      </div>
      <ul className="nav--links">{renderNavItems(routerState.routes)}</ul>
    </nav>
  );
};

export default Navbar;
