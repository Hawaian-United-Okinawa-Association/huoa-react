import React from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import CardEvent from 'components/Cards/CardEvent/CardEvent';

const Events = () => {
  const events = useSelector((state) => state.events);

  if (!events.length) return null;

  return (
    <Layout>
      <h1 className="events__title">Events Calendar</h1>
      <section className="events">
        <h3 className="events__subtitle">Upcoming Events</h3>
        <div className="events__cards">
          { events.map((event, i) =>
            <CardEvent key={ i } props={ event } />
          )}
        </div>

      </section>
      <section className="events">
        <h3 className="events__subtitle">Annual Events</h3>
        <div className="events__cards">
          { events.map((event, i) =>
            <CardEvent key={ i } props={ event } />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
