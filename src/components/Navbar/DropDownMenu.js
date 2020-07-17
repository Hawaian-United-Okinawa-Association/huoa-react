// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Components, assets, actions, styles etc..
import { setActiveMenu } from '../../actions/index';

const DropDownMenu = (props) => {
  const dispatch = useDispatch();

  const closeMenu = (e) => {
    e.stopPropagation();
    dispatch(setActiveMenu(false));
  };

  const renderMenuItems = props.items.map((item) => (
    <Link className="nav--dropdown__link" to={item.linkTo} onClick={closeMenu} key={item.linkTo}>
      <li className="nav--dropdown__link--txt">{item.name}</li>
    </Link>
  ));

  return (
    <div className="nav--dropdown">
      <div className="nav--dropdown__links">{renderMenuItems}</div>
    </div>
  );
};

export default DropDownMenu;
