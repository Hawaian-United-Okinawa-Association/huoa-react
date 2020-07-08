//Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const NavItem = (props) => {
  const navState = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  return (
    <Link
      className={props.name === 'Donate' ? 'donate-btn' : null}
      onClick={() => dispatch(setActiveMenu(props.name))}
      to={props.children ? '#' : props.linkTo}
    >
      <li href="#" className={props.name === 'Donate' ? 'donate-btn-txt' : null}>
        {props.name}
      </li>
      {navState.activeMenu === props.name && props.children}
    </Link>
  );
};

export default NavItem;
