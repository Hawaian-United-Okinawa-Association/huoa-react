import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';
import './CardSmall.scss';

const CardSmall = ({ image, imageAlt, header, paragraph, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-small'>
      <img className='card-small__image' src={image} alt={`${imageAlt}`} />
      <div className='card-small__text'>
        <h1 className='card-small__header'>{header}</h1>
        <p className='card-small__paragraph'>{paragraph}</p>
      </div>
      <button className='card-small__button'>
        <Button type='text' ref={ref} onClick={onClick}>
          {button}
        </Button>
      </button>
    </div>
  );
};

export default CardSmall;
