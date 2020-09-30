import React, { useRef } from 'react';

import Image from '../../Image/Image';
import Button from '../../Button/Button';
import './CardLarge.scss';

const CardLarge = ({ image, altTag, header, body, button, onClick }) => {
  const ref = useRef();
  return (
    <div className='card-large'>
      <Image className='card-large__image' img={image} alt={altTag} />
      <div className='card-large__text'>
        <p className='card-large__header'>{header}</p>
        <p className='card-large__body'>{body}</p>
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
