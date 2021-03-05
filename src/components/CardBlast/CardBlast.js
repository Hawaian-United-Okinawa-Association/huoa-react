import React, { useRef } from 'react';

import Button from '../Button/Button';

const CardBlast = ({ props }) => {
  const { title, body, first_name_placeholder, last_name_placeholder, email_placeholder, button_text, mailchimp_url } = props;
  const ref = useRef();

  //TODO - build the api request function, using the mailchimp_url api from wordpress. Then check the return, and start building the logic if the email already exists in the return, then show a confirmation on the form. Probably over the email field.


  return (
    <div className='card-blast'>
      <div className='card-blast__text'>
        <h3 className='card-blast__title'>{ title }</h3>
        <p className='card-blast__body'>{ body }</p>
      </div>
      <div className='card-blast__form'>
        <div className="card-blast__form__name-container">
          <input className='card-blast__input' type='text' placeholder={ first_name_placeholder }></input>
          <input className='card-blast__input' type='text' placeholder={ last_name_placeholder }></input>
        </div>
        <input className='card-blast__input' type='text' placeholder={ email_placeholder }></input>
      </div>
      <div className='card-blast__button-container'>
        <Button type='filled' ref={ ref } onClick={() => console.log(`here's the api ${ mailchimp_url }`)}>{ button_text }</Button>
      </div>
    </div>
  );
};

export default CardBlast;
