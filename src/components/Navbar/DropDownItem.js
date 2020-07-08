import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItem = (props) => {
  console.log(props.name);
  return <Link to={props.linkTo}>props.name</Link>;
};

export default DropDownItem;
