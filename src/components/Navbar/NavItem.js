//Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const NavItem = (props) => {
  const { name, linkTo, children, navState, setNavState } = props;
  const setClass = () => (name === 'Donate' ? 'donate' : 'nav');

  return (
    <div
      className={`${setClass()}--link`}
      onMouseEnter={() => setNavState(name)}
      onMouseLeave={() => setNavState(false)}
    >
      <Link className={`${setClass()}--link__txt`} to={linkTo}>
        {name}
      </Link>
      {navState === name && children}
    </div>
  );
};

export default NavItem;
