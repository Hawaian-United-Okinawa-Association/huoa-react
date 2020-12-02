import React from 'react';
import Image from 'components/Image/Image';
import Button from 'components/Button/Button';

const CardEvent = ({ props }) => {
  if (!props.acf) return null;

  const { event_title, event_date, event_location } = props.acf;
  const event_slug = props.slug;

  let splitEvent = event_date.split(' ');
  let month = splitEvent[0].substring(0, 3);
  let day = splitEvent[1].slice(0, -1);
  let year = splitEvent[2];
  let time =`${ splitEvent[3] } ${ splitEvent[4] }`;

  console.log(splitEvent);

  return (
    <div className="card-event">
      <div className="card-event__date">{ month }<br />{ day }</div>
      <Image className="card-event__image" webp="https://dev.huoa.org/wp-content/uploads/2020/09/home-hero-4.webp" />
      <h3 className="card-event__title">{ event_title }</h3>
      <p className="card-event__full-date">
        { month } { day }, { year } <span className="card-event__spacer">|</span> { time }
      </p>

      <div className="card-event__location"
        dangerouslySetInnerHTML={{ __html: event_location }} />

      <div className="card-event__button">
        <Button type="text" link={`events/${ event_slug }`}>Read More</Button>
      </div>
    </div>
  );
};

export default CardEvent;
