import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ parent, parentText, rendered }) => {
  return (
    <p className="breadcrumb">
      <Link className="breadcrumb__item" to="/">
        Home
      </Link>
      /
      <Link className="breadcrumb__item" to={ `/${parent}` } >
        { parentText }
      </Link>
      /<span className="breadcrumb__item breadcrumb__item--selected">{rendered}</span>
  </p>
  )
}

export default Breadcrumbs;
