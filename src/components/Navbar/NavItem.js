//Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const NavItem = (props) => {
  const navState = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  const setMenu = () => dispatch(setActiveMenu(props.name));
  const closeMenu = () => dispatch(setActiveMenu(false));
  const setClass = () => (props.name === 'Donate' ? 'donate' : 'nav');
  const goToLink = () => props.history.push(props.children ? props.children.props.items[0].linkTo : props.linkTo);

  return (
    <div className={`${setClass()}--link`} onMouseEnter={setMenu} onMouseLeave={closeMenu} onClick={goToLink}>
      <li className={`${setClass()}--link__txt`}>{props.name}</li>
      {navState.activeMenu === props.name && props.children}
    </div>
  );
};

export default withRouter(NavItem);
