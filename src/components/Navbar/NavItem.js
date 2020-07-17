//Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const NavItem = (props) => {
  const navState = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const setMenu = () => dispatch(setActiveMenu(props.name));
  const closeMenu = () => dispatch(setActiveMenu(false));
  const setClass = () => (props.name === 'Donate' ? 'donate' : 'nav');

  return (
    <div className={`${setClass()}--link`} onMouseEnter={setMenu} onMouseLeave={closeMenu}>
      <Link className={`${setClass()}--link__txt`} to={props.linkTo}>
        {props.name}
      </Link>
      {navState.activeMenu === props.name && props.children}
    </div>
  );
};

export default NavItem;
