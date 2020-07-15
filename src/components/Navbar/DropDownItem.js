import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItem = (props) => {
  return (
    <Link className="nav--dropdown__link" to={props.linkTo} onClick={(e) => e.stopPropagation()}>
      <li className="nav--dropdown__link--txt">{props.name}</li>
    </Link>
  );
};

export default DropDownItem;
