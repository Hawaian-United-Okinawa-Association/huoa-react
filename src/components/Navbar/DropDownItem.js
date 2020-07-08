import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItem = (props) => {
  return (
    <Link className="menu-item" to={props.linkTo}>
      {props.name}
    </Link>
  );
};

export default DropDownItem;
