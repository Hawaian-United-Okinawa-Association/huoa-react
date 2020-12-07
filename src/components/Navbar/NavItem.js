// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Components, actions, assets, etc..
import Button from 'components/Button/Button';

const NavItem = (props) => {
  const { name, linkTo, children, navState, setNavState } = props;
  const isActive = navState === name ? 'navbar__link--active' : null;

  const donateItem = () => {
    return (
      <div onMouseEnter={() => setNavState(null)}>
        <Button type="outlined" link="donate">
          Donate
        </Button>
      </div>
    );
  };

  const redirectItem = (name, linkTo, isActive) => {
    return (
      <div>
        <a className={`navbar__link ${isActive}`} href={linkTo} data-text={name} onMouseEnter={() => setNavState(name)}>
          {name}
        </a>
      </div>
    );
  };

  const standardItem = (name, linkTo, children, isActive) => {
    if (children) {
      return (
        <div>
          <div className={`navbar__link ${isActive}`} data-text={name} onMouseEnter={() => setNavState(name)}>
            {name}
          </div>
          {navState === name && children}
        </div>
      );
    } else {
      return (
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
        </div>
      );
    }
  };

  switch (name) {
    case 'Donate':
      return donateItem();
    case 'Shop':
      return redirectItem(name, linkTo, isActive);
    default:
      return standardItem(name, linkTo, children, isActive);
  }
};

export default NavItem;
