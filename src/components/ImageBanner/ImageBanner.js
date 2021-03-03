import React from 'react';
import Image from 'components/Image/Image.js';

const ImageBanner = ({ image_banner }) => {
   return (
    <div className="image-banner">
      {image_banner.map((el, i) =>  
       <Image key={i} className="image-banner__image" img={el.url} alt={el.alt}></Image>      
      )}
    </div>
   );
} 

export default ImageBanner;
