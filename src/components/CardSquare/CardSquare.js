import React, { useRef } from 'react';

import Button from '../Button/Button';

const CardSquare = ({ props }) => {
  const { title, subtitle, body, button } = props;
  const ref = useRef();
  return (
    <div className='card-square'>
      <div className='card-square__text'>
        <h1 className='card-square__title'>{title}</h1>
        <h3 className='card-square__subtitle'>{subtitle}</h3>
        <p className='card-square__body'>{body}</p>
      </div>
      <div
      className='card-square__button'>
        <Button type='filled' ref={ref} link={button.link}>
          {button.text}
        </Button>
      </div>
    </div>
  );
};

export default CardSquare;
