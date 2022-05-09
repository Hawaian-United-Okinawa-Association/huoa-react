//Dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components, assets, actions, styles etc..
import NavItem from './NavItem';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import { ReactComponent as Bag } from '../../assets/shopping-bag.svg';
import { ReactComponent as Phone } from '../../assets/phone.svg';

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const { routes } = useSelector(state => state.router);

  const routesToObj =
    routes?.reduce((acc, val) => ({ ...acc, [val.title]: val }), {}) || {};
  const { Home, Shop, Contact, Donate, ...subItems } = routesToObj;

  const { title } = useSelector(state => state.settings);

  const renderMenuItems = children => {
    return children.map(item => {
      if (item.link)
      return (
        <a
          className="navbar__dropdown--link"
          key={item.slug}
          href={item.link}
          target={item.link.startsWith('/')? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
         {item.title}
        </a>
      );
      return (
        <Link
          className="navbar__dropdown--link"
          to={'/' + item.slug}
          onClick={() => setNavState(false)}
          key={item.slug}
          data-text={item.title}
        >
          {item.title}
        </Link>
      );
    });
  };

  const renderNavItems = items => {
    return items.map(item => {
      return (
        !!item &&
        item.slug !== 'home' && (
          <NavItem
            name={item.title}
            linkTo={
              item.slug !== 'https://shophuoa.com/'
                ? '/' + item.slug
                : 'https://shophuoa.com/'
            }
            key={item.slug}
            navState={navState}
            setNavState={setNavState}
          >
            {!!item.children.length && (
              <div className="navbar__dropdown">
                <ul className="navbar__dropdown--links">
                  {renderMenuItems(item.children)}
                </ul>
              </div>
            )}
          </NavItem>
        )
      );
    });
  };

  return (
    !!routes && (
      <nav className="navbar__container">
        <div
          className="navbar__container--sm"
          onMouseLeave={() => setNavState(false)}
        >
          <div className="navbar__first-row">
            <Link to="/" className="navbar__logo-box">
              <HUOALogo className="navbar__logo" />
              <div className="navbar__titles">
                <h2 className="navbar__title">{title}</h2>
              </div>
            </Link>
            <div className="navbar__first-row-links">
              <div className="navbar__first-row-link"><Bag/>{renderNavItems([Shop])}</div>
              <div className="navbar__first-row-link"><Phone/>{renderNavItems([Contact])}</div>
              {renderNavItems([Donate])}
            </div>
          </div>
          <ul
            className="navbar__second-row"
            onMouseLeave={() => setNavState(false)}
          >
            {renderNavItems(Object.values(subItems))}
          </ul>
        </div>
      </nav>
    )
  );
};

export default Navbar;
