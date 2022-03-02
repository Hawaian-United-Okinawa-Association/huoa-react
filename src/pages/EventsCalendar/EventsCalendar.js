import React from 'react';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';

const EventsCalendar = () => {
  
  return (
    <Layout>
      <Container>
      <h1>
        Events Calendar
      </h1>
      <iframe 
        src="https://www.google.com/calendar/embed?showTitle=0&showPrint=0&height=500&wkst=1&bgcolor=%23FFFFFF&src=huoacalendar%40gmail.com&color=%232952A3&src=j7d5p9evkshjmhik3v9po98kus%40group.calendar.google.com&color=%23B1440E&ctz=Pacific%2FHonolulu" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        scrolling="no"
        title="Events Calendar">
      </iframe>
      </Container>
    </Layout>
  );
};

export default EventsCalendar;
