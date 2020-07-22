//Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const NavItem = (props) => {
  const { name, linkTo, children } = props;
  const navState = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const setMenu = () => dispatch(setActiveMenu(name));
  const closeMenu = () => dispatch(setActiveMenu(false));
  const setClass = () => (name === 'Donate' ? 'donate' : 'nav');

  return (
    <div className={`${setClass()}--link`} onMouseEnter={setMenu} onMouseLeave={closeMenu}>
      <Link className={`${setClass()}--link__txt`} to={linkTo}>
        {name}
      </Link>
      {navState.activeMenu === name && children}
    </div>
  );
};

export default NavItem;
