import React from 'react';

import './Container.scss';

const Container = ({ cols, children }) => {
  if (cols) {
    return <div className={`container cols-${cols}`}>{children}</div>;
  }
  return <div className='container'>{children}</div>;
};

export default Container;
