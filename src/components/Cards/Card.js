import React from 'react';

import './Card.scss';

const Card = ({ children }) => {
  return <div className='card'>{children}</div>;
};

export default Card;
