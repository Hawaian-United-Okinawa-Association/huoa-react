// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Components, actions, assets, etc..
import Button from 'components/Button/Button';

const NavItem = (props) => {
  const { name, linkTo, children, navState, setNavState } = props;
  const isActive = navState === name ? 'navbar__link--active' : null;

  return name === 'Donate' ? (
    <Button type="outlined" link="donate">
      Donate
    </Button>
  ) : (
    <div>
      <Link
        className={`navbar__link ${isActive}`}
        to={linkTo}
        data-text={name}
        onMouseEnter={() => setNavState(name)}
        onClick={() => setNavState(false)}
      >
        {name}
      </Link>
      {navState === name && children}
    </div>
  );
};

export default NavItem;
