import React, { useEffect, useState }  from 'react';

import Image from 'components/Image/Image';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

const Hero = ({ props }) => {
  const { slides } = props.hero_slider;

  const [ active, setActive ] = useState(0);

  // In order to have a timer with setInterval we need to bind this to the component otherwise there is a memory leak in react, if you like to see what it looks like put set interval outside of the hook and watch the hero's promises bubble up
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useEffect(() => {
    if (slides.length === 1) return;

    const timer = setInterval(() => {
      active === slides.length - 1 ? setActive(0) : setActive(active + 1);
    }, 4000);

    return () => clearInterval(timer);
  });

  const updateSlide = (i) => {
    setActive(i);
  };

  return !!slides && (
    <div className="hero">
      <div className="hero__wrapper">
        { slides.map((slide, i) =>
          <div className='hero__slide' data-active={ active === i } key={ i }>
            <Image className="hero__image"
              webp={ slide.image.url }
            />
            { slide.content_box && (
              <div className="hero__overlay">
                <Container col='12'>
                  <div className="hero__content" data-placement={ slide.content.placement }>
                    <h2 className="hero__title">{ slide.content.title }</h2>
                    <h4 className="hero__description">{ slide.content.body ? slide.content.body : '' }</h4>
                    <Button className="hero__button" type='filled' link={ slide.content.button.link ? slide.content.button.link : '/'}>{ slide.content.button.text ? slide.content.button.text : 'Learn More' }</Button>
                  </div>
                </Container>
              </div>
            )}
          </div>
        ) }
      </div>
      { !!(slides.length > 1) && (
        <div className="hero__controls">
          { slides.map((el, i) =>
            <span className='hero__selector' data-active={ active === i } onClick={ () => updateSlide(i) } key={ 'selector-' + i }></span>
          ) }
        </div>
      )}
    </div>
  );
};

export default Hero;
