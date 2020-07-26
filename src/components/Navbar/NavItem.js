//Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

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
