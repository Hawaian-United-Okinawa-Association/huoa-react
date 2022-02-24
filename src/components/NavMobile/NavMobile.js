// Dependencies
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components, assets, actions, styles etc..
import { toggleScroll } from '../../actions/index.js';
import Button from '../Button/Button';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { ReactComponent as ButtonClose } from '../../assets/button-close.svg';
import { ReactComponent as Carrot } from '../../assets/carrot.svg';
import './NavMobile.scss';

const NavMobile = () => {
  const dispatch = useDispatch();
  const [navState, setNavState] = useState('init');
  const [dropdownOpen, setDropdownOpen] = useState('init');
  const [closeDropdown, setCloseDropdown] = useState('init');
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { routes } = useSelector(state => state.router);
  const { title, description } = useSelector(state => state.settings);

  const resetSideNav = status => {
    setCloseDropdown(status);
    setDropdownOpen(status);
    setNavState(status);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const handleResize = () => {
    setScreenWidth(window.innerWidth);

    if (screenWidth >= 1200) {
      resetSideNav('init');
    }
  };

  const handleAnimation = hook => {
    switch (hook) {
      case 'init':
        return '';
      case false:
        return '--inactive';
      case true:
        return '--active';
      default:
        return null;
    }
  };

  const handleScroll = () => {
    if (window.screen.width < 768) dispatch(toggleScroll());
  };

  const handleAnimationClick = title => {
    if (dropdownOpen === title) {
      setCloseDropdown(title);
      setDropdownOpen(false);
    } else {
      setDropdownOpen(title);
      setCloseDropdown(false);
    }
  };

  const renderDropdown = items => {
    return items.map(item => {
      if (item.slug === 'myhuoa')
        return (
          <a
            href="https://huoa.tradewing.com/home"
            className="nav-mobile__dropdown-item"
            target="_blank"
            key={item.slug}
            rel="noopener noreferrer"
          >
            {item.slug}
          </a>
        );
      return (
        <li className="nav-mobile__listItem" key={item.slug}>
          <Link
            onClick={() => {
              resetSideNav(false);
              handleScroll();
            }}
            to={`/${item.slug}`}
            className="nav-mobile__dropdown-item"
          >
            {item.title}
          </Link>
        </li>
      );
    });
  };

  const standardItem = item => {
    if (item.children.length) {
      const handleDrop = title => {
        if (title === closeDropdown) {
          return false;
        } else if (title === dropdownOpen) {
          return true;
        } else {
          return 'init';
        }
      };

      return (
        <li
          className="nav-mobile__listItem"
          key={item.slug}
          onClick={() => handleAnimationClick(item.title)}
        >
          <div className="nav-mobile__sidebar--item">
            {item.title}
            <Carrot
              className={`nav-mobile__sidebar--carrot${handleAnimation(
                handleDrop(item.title)
              )}`}
            />
          </div>
          <ul
            className={`nav-mobile__dropdown${handleAnimation(
              handleDrop(item.title)
            )}`}
          >
            {renderDropdown(item.children)}
          </ul>
        </li>
      );
    } else {
      return (
        <li
          className="nav-mobile__listItem"
          key={item.slug}
          onClick={() => resetSideNav('init')}
        >
          <Link to={`/${item.slug}`}>
            <div className="nav-mobile__sidebar--item">{item.title}</div>
          </Link>
        </li>
      );
    }
  };

  const redirectItem = item => {
    return (
      <li
        className="nav-mobile__listItem"
        key={item.slug}
        onClick={() => resetSideNav('init')}
      >
        <div className="nav-mobile__sidebar--item">
          <a
            href={item.slug}
            data-text={item.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </div>
      </li>
    );
  };

  const renderSideItems = items => {
    return items.map(item => {
      switch (item.title) {
        case 'Donate':
          return null;
        case 'Shop':
          return redirectItem(item);
        default:
          return standardItem(item);
      }
    });
  };

  return (
    <>
      <nav className="nav-mobile">
        <Link to="/">
          <div className="nav-mobile__header">
            <HUOALogo className="nav-mobile__logo" height="90" width="90" />
            <div className="nav-mobile__titles">
              <div className="nav-mobile__title">{title}</div>
              <div className="nav-mobile__title--sm">{description}</div>
            </div>
          </div>
        </Link>
        <Hamburger
          className="nav-mobile__hamburger"
          onClick={() => {
            setNavState(true);
            handleScroll();
          }}
        />
        <div className={`nav-mobile__sidebar${handleAnimation(navState)}`}>
          <ButtonClose
            onClick={() => {
              resetSideNav(false);
              handleScroll();
            }}
            className="nav-mobile__navclose"
          />
          <ul className="nav-mobile__sidebar--items">
            {!!routes && renderSideItems(routes)}
          </ul>
          <hr className="nav-mobile__sidebar--break" />
          <div className="nav-mobile__sidebar--footer">
            <Link
              to="/banquet-facility"
              onClick={() => {
                resetSideNav('init');
                handleScroll();
              }}
            >
              <small className="nav-mobile__sidebar--footer-link">
                Rent Our Ballroom
              </small>
            </Link>
            <Link
              to="/"
              onClick={() => {
                resetSideNav('init');
                handleScroll();
              }}
            >
              <small className="nav-mobile__sidebar--footer-link">
                Join our Newsletter
              </small>
            </Link>
            <div className="nav-mobile__sidebar--footer-button">
              <Link to="/donate">
                <Button
                  type="filled"
                  onClick={() => {
                    resetSideNav('init');
                    handleScroll();
                  }}
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMobile;
