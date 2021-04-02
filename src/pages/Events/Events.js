import React from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import CardEvent from 'components/Cards/CardEvent/CardEvent';

const Events = () => {
  const events = useSelector((state) => state.events);

  if (!events.length) return null;

  return (
    <Layout>
      <Container>
      <h2 className="events__title">Events Calendar</h2>
      <section className="events">
        <h4 className="events__subtitle">Upcoming Events</h4>
        <div className="events__cards">
          { events.map((event, i) =>
            !event.acf.annual ? <CardEvent key={ i } props={ event } /> : ''
          )}
        </div>

      </section>
      <section className="events">
        <h4 className="events__subtitle events__subtitle--annual">Annual Events</h4>
        <div className="events__cards">
          { events.map((event, i) =>
            event.acf.annual ? <CardEvent key={ i } props={ event } /> : ''
          )}
        </div>
      </section>
      </Container>
    </Layout>
  );
};

export default Events;
