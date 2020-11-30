import React, { useEffect, useState }  from 'react';
import { useSelector } from 'react-redux';

import Image from 'components/Image/Image';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

import './Hero.scss'

const Hero = () => {
  const heroImages = useSelector(state => state.heros);

  const [ active, setActive ] = useState(0);
  const [ content, setContent ] = useState(heroImages[0].acf);

  // In order to have a timer with setInterval we need to bind this to the component otherwise there is a memory leak in react, if you like to see what it looks like put set interval outside of the hook and watch the hero's promises bubble up
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useEffect(() => {
    const timer = setInterval(() => {
      active === heroImages.length - 1 ? setActive(0) : setActive(active + 1);
      setContent(heroImages[active].acf);
    }, 4000);

    return () => clearInterval(timer);
  });

  const updateSlide = (i) => {
    setActive(i);
    setContent(heroImages[i].acf);
  };

  return (
    <div className="hero">
      <div className="hero__wrapper">
        { heroImages.map((image, i) =>
          <div className='hero__slide' data-active={ active === i } key={ i }>
            <Image className="hero__image"
              webp={ image.acf.hero_image }
            />
          </div>
        ) }
      </div>
      <div className="hero__overlay">
        <Container col='12'>
          { !!content.hero_title && (
            <div className="hero__content">
              <h2 className="hero__title">{ content.hero_title }</h2>
              <h4 className="hero__description">{ content.hero_description ? content.hero_description : '' }</h4>
              <Button className="hero__button" type='filled' link={ content.button.link ? content.button.link : '/'}>{ content.button.text ? content.button.text : 'Learn More' }</Button>
            </div>
          ) }
        </Container>
      </div>
      <div className="hero__controls">
        { heroImages.map((el, i) =>
          <span className='hero__selector' data-active={ active === i } onClick={ () => updateSlide(i) } key={ 'selector-' + i }></span>
        ) }
      </div>
    </div>
  );
};

export default Hero;
