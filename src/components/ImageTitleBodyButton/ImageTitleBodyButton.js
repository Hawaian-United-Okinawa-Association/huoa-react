import React from 'react';
import Button from 'components/Button/Button.js';
import Image from 'components/Image/Image.js';

const ImageTitleBodyButton = ({ image, title, body, button }) => {
    return (
      <div className="image-title-body-button">
        <h4 className="image-title-body-button__section-heading">{title}</h4>
          <div className="image-title-body-button__container">
            <Image className="image-title-body-button__image" img={image.url} alt={image.alt} />
            <div className="image-title-body-button__section">
              <div className="image-title-body-button__body--right" dangerouslySetInnerHTML= {{__html: body}}/>
              <Button type="filled" link={button.link}>{button.text}</Button>
            </div>
          </div> 
        </div>
    );
  } 
  
  export default ImageTitleBodyButton;
