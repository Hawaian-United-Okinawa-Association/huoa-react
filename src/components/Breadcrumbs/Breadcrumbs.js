import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Chevron } from 'assets/chevron-down.svg';

const Breadcrumbs = ({ parent, parentText, rendered }) => {
  return (
    <p className="breadcrumb">
      <Link className="breadcrumb__item" to="/">
        Home
      </Link>
      <Chevron/>
      <Link className="breadcrumb__item" to={ `/${parent}` } >
        { parentText }
      </Link>
      <Chevron/><span className="breadcrumb__item breadcrumb__item--selected">{rendered}</span>
    </p>
  )
}

export default Breadcrumbs;
