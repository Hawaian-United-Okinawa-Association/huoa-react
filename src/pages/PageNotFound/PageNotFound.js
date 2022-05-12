import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <div className="page-not-found">
        <h1 className="page-not-found__title">Page Not Found</h1>
        <p className="page-not-found__description">
          Sorry, but the page you are looking for does not exist.
        </p>
        <Link to="/" className="button" type="filled">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
