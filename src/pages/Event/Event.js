import React from 'react';
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import Image from 'components/Image/Image';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import Hero from 'components/Hero/Hero';

import { ReactComponent as Map } from 'assets/map-pin.svg';
import { ReactComponent as Clock } from 'assets/clock.svg';

const Event = ({ match }) => {
  const eventsData = useSelector((state) => state.events);
  const event = eventsData.find((event) => event.slug === match.params.eventId);

  if (!event) return null;

  let { event_title, event_details, event_location, event_date, event_image } = event.acf;

  let splitEvent = event_date.split(' ');
  let month = splitEvent[0];
  let day = splitEvent[1].slice(0, -1);
  let year = splitEvent[2];
  let time =`${ splitEvent[3] } ${ splitEvent[4] }`;
  const { hero_slider } = event.acf;
  const { buttons } = event.acf;

  return (
    <Layout>
      <Container>
      <section className="event">
        <Breadcrumbs parent="events" parentText="Events" rendered={ event_title } />
        <h2 className="event__title">{ event_title }</h2>
      <div>
        <h3 className="event__date">
         <Clock/> { month } { day }, { year } <span className="event__spacer">|</span> { time }
        </h3>
        <div className="event__location"><Map/><div dangerouslySetInnerHTML={{ __html: event_location }} /></div> 
        { !!hero_slider ? <Hero props={{ hero_slider }}/> : <Image className="event__image" webp={ event_image.url } /> }
        <h4>About this event</h4>
        <div className="event__details">
        <div dangerouslySetInnerHTML={{ __html: event_details }} />
        { !!buttons && buttons.map(button=> <a className='button' type='filled' href={button.link}>{button.text}</a>) }
      </div>
      </div>
      </section>
      </Container>
    </Layout>
  );
};

export default withRouter(Event);