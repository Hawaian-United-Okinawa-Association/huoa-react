import React from 'react';

import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import TitleBody from 'components/TitleBody/TitleBody';

const EventsCalendar = ({ data }) => {
  console.log(data)
  if (!data) return null;
  let { builder } = data;
  console.log(builder)
  console.log(builder[0].title)

  return (
    <Layout>
      <Container>
      <h1 className="events-calendar__title">
        Events Calendar
      </h1>
      <iframe 
        src="https://www.google.com/calendar/embed?showTitle=0&showPrint=0&height=500&wkst=1&bgcolor=%23FFFFFF&src=huoacalendar%40gmail.com&color=%232952A3&src=j7d5p9evkshjmhik3v9po98kus%40group.calendar.google.com&color=%23B1440E&ctz=Pacific%2FHonolulu" 
        width="100%" 
        height="500" 
        frameBorder="0" 
        scrolling="no"
        title="Events Calendar"
        className="events-calendar__calendar">
      </iframe>
      <h2 className="class-schedule__title">{builder[0].title}</h2>
      <TitleBody className="class-schedule__class" props={builder[1]}/>
      <TitleBody className="class-schedule__class" props={builder[2]}/>
      <TitleBody className="class-schedule__class" props={builder[3]}/>
      <TitleBody className="class-schedule__class" props={builder[4]}/>
      <TitleBody className="class-schedule__class" props={builder[5]}/>
      </Container>
    </Layout>
  );
};

export default EventsCalendar;
