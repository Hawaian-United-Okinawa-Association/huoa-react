import React, { useRef } from 'react';

// import Image from '../../Image/Image';
// import Button from '../../Button/Button';
import './CardBlank.scss';

const CardBlank = ({ children }) => {
  const ref = useRef();
  return <div className='card-blank'>{children}</div>;
};

export default CardBlank;
