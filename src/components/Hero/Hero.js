import React, { useEffect, useState } from 'react';

import Image from 'components/Image/Image';
import Button from 'components/Button/Button';
import { ReactComponent as Chevron } from '../../assets/chevron-down.svg';

const Hero = ({ props }) => {
  const { slides } = props.hero_slider;

  const [active, setActive] = useState(0);

  // In order to have a timer with setInterval we need to bind this to the component otherwise there is a memory leak in react, if you like to see what it looks like put set interval outside of the hook and watch the hero's promises bubble up
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  useEffect(() => {
    if (slides.length === 1) return;

    const timer = setInterval(() => {
      active === slides.length - 1 ? setActive(0) : setActive(active + 1);
    }, 4000);

    return () => clearInterval(timer);
  });

  const updateSlide = i => {
    setActive(i);
  };

  return (
    !!slides && (
      <div className="hero">
        <div className="hero__wrapper">
          {slides.map((slide, i) => (
            <div className="hero__slide" data-active={active === i} key={i}>
              <Image className="hero__image" webp={slide.image.url} />
              {slide.content_box && (
                <div className="hero__overlay">
                  <div
                    className="hero__content"
                    data-placement={slide.content.placement}
                  >
                    <div>
                      <h2 className="hero__title">{slide.content.title}</h2>
                      <p className="hero__description">
                        {slide.content.body ? slide.content.body : ''}
                      </p>
                    </div>
                    <Button
                      className="hero__button"
                      type="filled"
                      link={
                        slide.content.button.link
                          ? slide.content.button.link
                          : '/'
                      }
                    >
                      {slide.content.button.text
                        ? slide.content.button.text
                        : 'Learn More'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="hero__arrows">
            <button
              onClick={() =>
                active === 0
                  ? setActive(slides.length - 1)
                  : setActive(active - 1)
              }
            >
              <Chevron className="arrow-left" />
            </button>
            <button
              onClick={() =>
                active === slides.length - 1
                  ? setActive(0)
                  : setActive(active + 1)
              }
            >
              <Chevron className="arrow-right" />
            </button>
          </div>
        </div>
        {slides[active].content_box && (
          <div className="hero__overlay--mobile">
            <h2 className="hero__title">{slides[active].content.title}</h2>
            <p className="hero__description">
              {slides[active].content.body ? slides[active].content.body : ''}
            </p>
            <div className="hero__button--wrapper">
              <Button
                className="hero__button"
                type="filled"
                link={
                  slides[active].content.button.link
                    ? slides[active].content.button.link
                    : '/'
                }
              >
                {slides[active].content.button.text
                  ? slides[active].content.button.text
                  : 'Learn More'}
              </Button>
            </div>
          </div>
        )}
        {!!(slides.length > 1) && (
          <div className="hero__controls">
            {slides.map((el, i) => (
              <span
                className="hero__selector"
                data-active={active === i}
                onClick={() => updateSlide(i)}
                key={'selector-' + i}
              ></span>
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default Hero;
