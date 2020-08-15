import React from 'react';

import './Card.scss';

const CardWithProps = ({ image, imageAlt, header, paragraph, button }) => {
  return (
    <>
    <img className='card__image' src={`${image}`} alt={`${imageAlt}`}/>
    <div className='card__text'>
      <h1>{`${header}`}</h1>
      <p>{`${paragraph}`}</p>
    </div>
    <button className='card__button'>{`${button}`}</button>
    </>
  );
};

export default CardWithProps;
