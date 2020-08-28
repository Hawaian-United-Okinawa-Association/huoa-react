import React from 'react';

import './CardLarge.scss';

const CardLarge = ({ image, imageAlt, header, paragraph, button }) => {
  return (
    <div className='card-large'>
      <img className='card-large__image' src={image} alt={imageAlt}/>
      <div className='card-large__text'>
        <p className='card-large__header'>{header}</p>
        <p className='card-large__paragraph'>{paragraph}</p>
      </div>
      <button className='card-large__button'>{button}</button>
    </div>
  );
};

export default CardLarge;
