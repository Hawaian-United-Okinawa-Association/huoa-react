import React from 'react';
import { Helmet } from 'react-helmet';

const Header = ({ props }) => {
  return !!props ? (
    <Helmet>
      <title>{ props.title || 'Huoa.org' }</title>
      <meta name="description" content={ props.description || 'Welcome to Huoa.org'} />
    </Helmet>
  ): null;
}

export default Header;
