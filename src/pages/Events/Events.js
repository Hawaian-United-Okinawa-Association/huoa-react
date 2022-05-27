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

  return (
    <Layout>
      <Container>
        <h2 className="events__title">Events</h2>
        <section className="events">
          <h4 className="events__subtitle">Upcoming Events</h4>
          <div className="events__cards">
            {events
              .sort(getDateDifference)
              .map((event, i) =>
                today < new Date(event.acf.event_date) ? (
                  <CardEvent key={i} props={event} />
                ) : (
                  ''
                )
              )}
          </div>
        </section>
        <section className="events">
          <h4 className="events__subtitle events__subtitle--annual">
            Past Events
          </h4>
          <div className="events__cards">
            {events
              .sort(getDateDifference)
              .map((event, i) =>
                today > new Date(event.acf.event_date) ? (
                  <CardEvent key={i} props={event} />
                ) : (
                  ''
                )
              )}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Events;
