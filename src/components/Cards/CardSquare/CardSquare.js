import React, { useRef } from 'react';

import Button from '../../Button/Button';

const CardSquare = ({ header, subheader, body, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-square'>
      <div className='card-square__text'>
        <h1 className='card-square__header'>{header}</h1>
        <h3 className='card-square__subheader'>{subheader}</h3>
        <p className='card-square__body'>{body}</p>
      </div>
      <div
      className='card-square__button'>
        <Button type='filled' ref={ref} onClick={onClick}>
          {button}
        </Button>
      </div>
    </div>
  );
};

export default CardSquare;
