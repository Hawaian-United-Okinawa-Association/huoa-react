import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';
import './CardSmall.scss';

//TODO when the Image Component is done, add it to this card.

const CardSmall = ({ image, altTag, header, body, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-small'>
      <img className='card-small__image' src={image} alt={`${altTag}`} />
      <div className='card-small__text'>
        <h1 className='card-small__header'>{header}</h1>
        <p className='card-small__body'>{body}</p>
      </div>
      <div className='card-small__button'>
        <Button type='text' ref={ref} onClick={onClick}>
          {button}
        </Button>
      </div>
    </div>
  );
};

export default CardSmall;
