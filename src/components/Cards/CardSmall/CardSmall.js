import React from 'react';

import './CardSmall.scss';

const CardSmall = ({ image, imageAlt, header, paragraph, button }) => {
  return (
    <div className='card-small'>
      <img className='card-small__image' src={image} alt={`${imageAlt}`}/>
      <div className='card-small__text'>
        <h1 className='card-small__header'>{header}</h1>
        <p className='card-small__paragraph'>{paragraph}</p>
      </div>
      <button className='card-small__button'>{button}</button>
    </div>
  );
};

export default CardSmall;
