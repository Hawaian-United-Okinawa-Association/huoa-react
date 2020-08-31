import React from 'react';
import { Helmet } from 'react-helmet';

const Header = ({ props }) => {
  return !!props ? (
    <Helmet>
      <title>{ props.title }</title>
      <meta name="description" content={ props.description } />
    </Helmet>
  ) : (
    <Helmet>
      <title>Huoa.org</title>
      <meta name="description" content='Welcome to Huoa.org' />
    </Helmet>
  );
}

export default Header;
