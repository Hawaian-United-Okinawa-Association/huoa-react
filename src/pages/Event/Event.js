import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Image from 'components/Image/Image';

const Event = ({ match }) => {
  const events = useSelector((state) => state.events);

  if (!events.length) return null;

  const { acf } = events.find(event => event.slug === match.params.eventId);

  let { event_title, event_details, event_location, event_date } = acf;

  let splitEvent = event_date.split(' ');
  let month = splitEvent[0];
  let day = splitEvent[1].slice(0, -1);
  let year = splitEvent[2];
  let time =`${ splitEvent[3] } ${ splitEvent[4] }`;

  return (
    <Layout>
      <section className="event">
        <div className="event__breadcrumbs">
          <Link to='/'>Home</Link> / <Link to='/events'>Events</Link> / <span className="event__highlight">{ event_title }</span>
          </div>
        <h2 className="event__title">{ event_title }</h2>
        <Image className="event__image" webp="https://dev.huoa.org/wp-content/uploads/2020/09/home-hero-4.webp" />
        <h3 className="event__date">
          { month } { day }, { year } <span className="event__spacer">|</span> { time }
        </h3>
        <p className="event__location" dangerouslySetInnerHTML={{ __html: event_location }}></p>
        <div className="event__details" dangerouslySetInnerHTML={{ __html: event_details }} />
      </section>
    </Layout>
  );
};

export default withRouter(Event);
