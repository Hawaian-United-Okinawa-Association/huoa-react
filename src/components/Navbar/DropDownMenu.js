// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const DropDownMenu = (props) => {
  const renderMenuItems = props.items.map((item) => (
    <Link className="nav--dropdown__link" to={item.linkTo} onClick={(e) => e.stopPropagation()} key={item.linkTo}>
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
