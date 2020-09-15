import React, { useRef } from 'react';
// import { useDispatch } from 'react-redux';

import Button from '../../Button/Button';
import './CardSquare.scss';

const CardSquare = ({ header, subheader, paragraph, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-square'>
      <div className='card-square__text'>
        <h1 className='card-square__header'>{header}</h1>
        <h3 className='card-square__subheader'>{subheader}</h3>
        <p className='card-square__paragraph'>{paragraph}</p>
      </div>
      <button className='card-square__button'>
        <Button type='filled' ref={ref} onClick={onClick}>
          {button}
        </Button>
      </button>
    </div>
  );
};

export default CardSquare;
