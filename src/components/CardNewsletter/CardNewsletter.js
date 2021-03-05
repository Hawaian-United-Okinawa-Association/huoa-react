import React, { useRef } from 'react';

import Button from '../Button/Button';

const CardNewsletter = ({ props }) => {
  const {title, body, buttons } = props;
  const ref = useRef();

  //TODO - Debug the links for the buttons, since the links passed from WP is the full link, which shows the newsletter, but the button has relative routing, and doesn't show the newsletter. I might need to update the button component to get this to work.

  console.log(buttons[0].link);

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