import React from 'react';

const Image = ({ className, webp, img, alt }) => {
  return (
    <picture>
      <source srcSet={ webp } type='image/webp' />
      <img className={`${className}`} src={ img } loading='lazy' alt={ alt ? alt : 'Huoa.org Image' } />
    </picture>
  )
};

export default Image;
