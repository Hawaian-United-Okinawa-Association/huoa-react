import React from 'react';

import Button from 'components/Button/Button';
import './DonateSectionOne.scss';

const DonateSectionOne = ({ data }) => {
  
  function createTextMarkup() {
    return {__html: data.text};
  }

  return (
    <div className='donate-section-one'>
      <h1 className='donate-section-one__title'>{data.title}</h1>
      <div className='donate-section-one__body'>
        <div className='donate-section-one__content'>
          <div className='donate-section-one__text' dangerouslySetInnerHTML={createTextMarkup()} />
          <Button link={data.button_link} type='filled'>{data.button_text}</Button>
        </div>
        <img className='donate-section-one__image' src={data.image_link} alt='Giving To HUOA'/>
      </div>
    </div>
  )
}

export default DonateSectionOne;
