//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import { setActiveMenu } from '../../actions/index';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const { routes } = useSelector((state) => state.router);

  const renderMenuItems = (children) => {
    return children.map((item) => (
      <Link
        className="nav--dropdown__link"
        to={item.linkTo}
        onClick={() => dispatch(setActiveMenu(false))}
        key={item.linkTo}
      >
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
        <NavItem name={item.name} linkTo={item.linkTo} key={item.linkTo}>
          {dropdown(item.children)}
        </NavItem>
      );
    });
  };

  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav--container">
          <HUOALogo className="nav--logo" />
          <div className="nav--titles">
            <h2 className="nav--title">Hawaii United Okinawa Association</h2>
            <h5 className="nav--title__sm">Celebrating 120 years of Uchinanchu in Hawaii</h5>
          </div>
        </div>
      </Link>
      <ul className="nav--items">{renderNavItems(routes)}</ul>
    </nav>
  );
};

export default Navbar;
