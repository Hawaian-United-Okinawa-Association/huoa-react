import React, { useRef } from 'react';

import Button from '../Button/Button';

const CardBlast = ({ props }) => {
  const { title, body, firstName, lastName, email, buttonText, subscribeUrl } = props;
  const ref = useRef();

  //TODO - build the api request function, using the api from wordpress. Then check the return, and start building the logic if the email already exists in the return, then show a confirmation on the form. Probably over the email field.

  // let apiPlaceholder = 'https://huoa.us10.list-manage.com/subscribe/post?u=fb4e3b9e255496f68e4d87e35&amp;id=96858fbc3b';

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
        <Button type='filled' ref={ ref } onClick={() => console.log(`here's the api ${ subscribeUrl }`)}>{ buttonText }</Button>
      </div>
    </div>
  );
};

export default CardBlast;
