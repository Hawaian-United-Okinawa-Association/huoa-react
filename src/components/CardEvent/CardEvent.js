import React from 'react';
import Image from 'components/Image/Image';
import Button from 'components/Button/Button';

import { ReactComponent as Map } from 'assets/map-pin.svg';
import { ReactComponent as Clock } from 'assets/clock.svg';

const CardEvent = ({ props }) => {
  if (!props.acf) return null;

  const { event_title, event_date, event_location, event_image } = props.acf;
  const event_slug = props.slug;

  let splitEvent = event_date.split(' ');
  let month = splitEvent[0].substring(0, 3);
  let day = splitEvent[1].slice(0, -1);
  let year = splitEvent[2];
  let time =`${ splitEvent[3] } ${ splitEvent[4] }`;

  return (
    <div className="card-event">
      <div className='card-event__image-and-title'>
      <Image className="card-event__image" webp={ event_image.url } />
      <h3 className="card-event__title">{ event_title }</h3>
      </div>
      <p className="card-event__full-date">
        <Clock/>{ month } { day }, { year } <span className="card-event__spacer">|</span> { time }
      </p>
      <div className='card-event__location-container'>
        <Map/>
        <div className="card-event__location"
          dangerouslySetInnerHTML={{ __html: event_location }} />
        </div>
      <div className="card-event__button">
        <Button type="text" link={`/events/${ event_slug }`}>Read More</Button>
      </div>
    </div>
  );
};

export default CardEvent;
