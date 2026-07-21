import React from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import CardEvent from 'components/CardEvent/CardEvent';

const Events = () => {
  const events = useSelector(state => state.events);
  let today = new Date();

  const getDateDifference = (a, b) =>
    Date.parse(a.acf.event_date) - Date.parse(b.acf.event_date);

  if (!events.length) return null;

  const upcoming = events
    .filter(event => today < new Date(event.acf.event_date))
    .sort(getDateDifference);

  // Past events read most recent first.
  const past = events
    .filter(event => today > new Date(event.acf.event_date))
    .sort((a, b) => getDateDifference(b, a));

  return (
    <Layout>
      <Container>
        <h2 className="events__title">Events</h2>
        <section className="events">
          <h4 className="events__subtitle">Upcoming Events</h4>
          <div className="events__cards">
            {upcoming.map((event, i) => (
              <CardEvent key={i} props={event} />
            ))}
          </div>
        </section>
        <section className="events">
          <h4 className="events__subtitle events__subtitle--annual">
            Past Events
          </h4>
          <div className="events__cards">
            {past.map((event, i) => (
              <CardEvent key={i} props={event} />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Events;
