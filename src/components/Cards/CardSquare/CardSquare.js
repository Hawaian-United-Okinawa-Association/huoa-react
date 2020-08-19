import React from 'react';

import './CardSquare.scss';

const CardSquare = ({ header, subheader, paragraph, button }) => {
  return (
    <div className='card-square'>
      <div className='card-square__text'>
        <h1 className='card-square__header'>{`${header}`}</h1>
        <h3 className='card-square__subheader'>{`${subheader}`}</h3>
        <p className='card-square__paragraph'>{`${paragraph}`}</p>
      </div>
      <button className='card-square__button'>{`${button}`}</button>
    </div>
  );
};

export default CardSquare;
