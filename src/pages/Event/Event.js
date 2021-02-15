import React from 'react';
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Image from 'components/Image/Image';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';

const Event = ({ match }) => {
  const eventsData = useSelector((state) => state.events);
  const event = eventsData.find((event) => event.slug === match.params.eventId);

  if (!event) return null;

  let { event_title, event_details, event_location, event_date } = event.acf;
  let splitEvent = event_date.split(' ');
  let month = splitEvent[0];
  let day = splitEvent[1].slice(0, -1);
  let year = splitEvent[2];
  let time =`${ splitEvent[3] } ${ splitEvent[4] }`;

  console.log(event)
  return (
    <Layout>
      <section className="event">
      <Image className="event__image" webp="https://dev.huoa.org/wp-content/uploads/2020/09/home-hero-4.webp" />
      <div className="event__section--left">
        <Breadcrumbs parent="events" parentText="Events" rendered={ event_title } />
        <h2 className="event__title">{ event_title }</h2>
        <h3 className="event__date">
          { month } { day }, { year } <span className="event__spacer">|</span> { time }
        </h3>
        <p className="event__location" dangerouslySetInnerHTML={{ __html: event_location }}></p>
        <div className="event__details" dangerouslySetInnerHTML={{ __html: event_details }} />
      </div>
      </section>
    </Layout>
  );
};

export default withRouter(Event);
