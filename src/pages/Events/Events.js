import React from 'react';
import { useSelector } from 'react-redux';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import CardEvent from 'components/CardEvent/CardEvent';

const Events = () => {
  const events = useSelector((state) => state.events);

  if (!events.length) return null;

  return (
    <Layout>
      <Container>
      <h2 className="events__title">Events</h2>
      <section className="events">
        <div className="events__cards">
          { events.map((event, i) => 
            <CardEvent key={ i } props={ event } />
          )}
        </div>
      </section>
      </Container>
    </Layout>
  );
};

export default Events;
