import React, { useRef } from 'react';

import Button from '../Button/Button';

const CardBlast = ({ props }) => {
  const { title, body, firstName, lastName, email, button } = props;
  const ref = useRef();

  return (
    <div className='card-blast'>
      <div className='card-blast__text'>
        <h3 className='card-blast__title'>{ title }</h3>
        <p className='card-blast__body'>{ body }</p>
      </div>
      <div className='card-blast__form'>
        <input className='card-blast__input' type='text' placeholder={ firstName }></input>
        <input className='card-blast__input' type='text' placeholder={ lastName }></input>
        <input className='card-blast__input' type='text' placeholder={ email }></input>
      </div>
      <div className='card-blast__button'>
        <Button type='filled' onClick={() => console.log('You clicked a button')}>{ button.text }</Button>
      </div>
    </div>
  );
};

export default CardBlast;
