import React, { useRef } from 'react';

import Button from 'components/Button/Button';

const CardNewsletter = ({ props }) => {
  const {title, body, buttons } = props;
  const ref = useRef();

  return (
    <div className='card-newsletter'>
      <div className='card-newsletter__text'>
        <h3 className='card-newsletter__title'>{ title }</h3>
        <p className='card-newsletter__body'>{ body }</p>
      </div>
      <div className='card-newsletter__button-container'>
        <Button type='filled' ref={ ref } link={ buttons[0].link }>{ buttons[0].text }</Button>
        <Button type='filled' ref={ ref } link={ buttons[1].link }>{ buttons[1].text }</Button>
      </div>
    </div>
  );
}

export default CardNewsletter;
