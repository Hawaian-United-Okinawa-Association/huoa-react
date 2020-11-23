import React from 'react';

const Container = ({ col, children }) => {
  if (col) {
    return <div className={`container col__${col}`}>{children}</div>;
  }
  return <div className='container'>{children}</div>;
};

export default Container;
