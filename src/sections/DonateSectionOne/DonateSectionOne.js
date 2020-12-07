import React from 'react';

import Image from 'components/Image/Image';
import Button from 'components/Button/Button';

const DonateSectionOne = ({ data }) => {
  
  const createTextMarkup = () => {
    return {__html: data.text};
  }

  return (
    <div className='donate-section-one'>
      <h1 className='donate-section-one__title'>{data.title}</h1>
      <div className='donate-section-one__body'>
        <div className='donate-section-one__content'>
          <div className='donate-section-one__text' dangerouslySetInnerHTML={createTextMarkup()} />
          <Button 
            link={data.button_link} 
            shouldOpenNewTab
            type='filled' 
          >
            {data.button_text}
          </Button>
        </div>
        <Image 
          alt='Giving To HUOA'
          className='donate-section-one__image' 
          img={data.image_link} 
        />
      </div>
    </div>
  )
}

export default DonateSectionOne;
