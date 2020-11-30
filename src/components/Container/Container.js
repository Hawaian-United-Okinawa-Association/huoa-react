import React from 'react';

const Container = ({ col, children }) => {
  if (col) {
    return <div className={`container container__col--${col}`}>{children}</div>;
  }
  return <div className='container'>{children}</div>;
};

export default Container;
