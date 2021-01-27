//Dependencies
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import Button from '../Button/Button';
import { ReactComponent as HUOALogo } from '../../assets/huoa-logo.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { ReactComponent as ButtonClose } from '../../assets/button-close.svg';
import { ReactComponent as Carrot } from '../../assets/carrot.svg';
import './NavMobile.scss';

const NavMobile = () => {
  const [ navState, setNavState ] = useState(false);
  const [ activeDropdown, setActiveDropdown ] = useState(false);
  const { routes } = useSelector((state) => state.router);
  // const rdom = require('react-dom');

  const mobileRoutes = routes.filter((item) => item.name !== 'Donate' && item.phase1 === true);
  mobileRoutes.unshift({ name: 'Home', linkTo: '/' });

  const resetSideNav = () => {
    setNavState(false);
    setActiveDropdown(false);
  };

  // const handleScroll = (e) => {
  //   console.log(e.target);
  //   const ele = rdom.findDOMNode(e.target);
  //   if (e.nativeEvent.deltaY <= 0) {
  //     /* scrolling up */
  //     if(ele.scrollTop <= 0) {e.preventDefault();}
  //   } else {
  //     /* scrolling down */
  //     if(ele.scrollTop + ele.clientHeight >= ele.scrollHeight) {
  //       e.preventDefault();
  //     }
  //   }
  // };

  const renderDropdown = (items) => {
    if(!items) return null;
    
    const phase1 = items.filter((item) => item.phase1);
    return phase1.map((item) => {
      return (
        <Link to={item.linkTo} key={item.linkTo} onClick={() => resetSideNav()}>
          <li className="nav-mobile__sidebar--dropdown-item">{item.name}</li>
        </Link>
      );
    });
  };

  const renderSideItems = (items) => {
    return items.map((item) => {
      const dropBool = activeDropdown === item.name;

      return (
        <div key={item.linkTo} onClick={item.children ? () => setActiveDropdown(dropBool ? null : item.name) : () => resetSideNav() }>
          <Link to={item.children ? '' : item.linkTo} className="nav-mobile__sidebar--item">
            <li>{item.name}</li>
            {item.children && (
              <Carrot
                className={`nav-mobile__sidebar--carrot${dropBool ? '--active' : ''}`}
              />
            )}
          </Link>
          <div className={`nav-mobile__sidebar--dropdown${dropBool ? '--active' : '--inactive'}`}>
            {renderDropdown(item.children)}
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <nav className="nav-mobile">
        <Link to='/'>
        <div className="nav-mobile__header">
          <HUOALogo className="nav-mobile__logo" height="90" width="90" />
          <div className="nav-mobile__titles">
            <div className="nav-mobile__title">Hawaii United Okinawa Association</div>
            <div className="nav-mobile__title--sm">Celebrating 120 years of Uchinanchu in Hawaii</div>
          </div>
        </div>
        </Link>
        <Hamburger className="nav-mobile__hamburger" onClick={() => setNavState(true)} />
        <div className={`nav-mobile__sidebar${navState ? '--active' : '--inactive'}`} >
          <ButtonClose onClick={() => resetSideNav()} className="nav-mobile__navclose" />
          <ul className="nav-mobile__sidebar--items">{renderSideItems(mobileRoutes)}</ul>
          <hr className="nav-mobile__sidebar--break" />
          <div className="nav-mobile__sidebar--footer">
            <small className="nav-mobile__sidebar--footer-link">Rent Our Ballroom</small>
            <small className="nav-mobile__sidebar--footer-link">Join our Newsletter</small>
            <div className="nav-mobile__sidebar--footer-button">
              <Button type="filled" link="donate">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavMobile;
