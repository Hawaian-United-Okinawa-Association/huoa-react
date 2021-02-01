import React, { useRef } from 'react';

import Image from '../../Image/Image';
import Button from '../../Button/Button';

const CardLarge = ({ props }) => {
  const { image, title, body, button } = props;
  const ref = useRef();

  return (
    <div className='card-large'>
      <Image className='card-large__image' webp={ image.url } alt={ image.alt } />
      <div className='card-large__text'>
        <p className='card-large__header'>{ title }</p>
        <p className='card-large__body'>{ body }</p>
      </div>
      <div className='card-large__button'>
        <Button type='filled' ref={ ref } link={ button.link }>
          { button.text }
        </Button>
      </div>
    </div>
  );
};

export default CardLarge;
