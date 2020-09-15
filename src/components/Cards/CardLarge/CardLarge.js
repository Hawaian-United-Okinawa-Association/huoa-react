import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';
import './CardLarge.scss';

const CardLarge = ({ image, imageAlt, header, paragraph, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-large'>
      <img className='card-large__image' src={image} alt={imageAlt} />
      <div className='card-large__text'>
        <p className='card-large__header'>{header}</p>
        <p className='card-large__paragraph'>{paragraph}</p>
      </div>
      <div className='card-large__button'>
        <Button type='filled' ref={ref} onClick={onClick}>
          {button}
        </Button>
      </div>
    </div>
  );
};

export default CardLarge;
