import React from "react";

import Layout from "components/Layout/Layout";
import Container from "components/Container/Container";
import TitleBody from "components/TitleBody/TitleBody";

const EventsCalendar = ({ data }) => {
  if (!data) return null;
  let { builder } = data;

  return (
    <Layout>
      <Container>
        <h1 className="events-calendar__title">Events Calendar</h1>
        <div className="responsiveCal">
          <div className="deskContent">
            <iframe title="desktop-calendar"
              src="https://www.google.com/calendar/embed?showTitle=0&showPrint=0&height=500&wkst=1&bgcolor=%23FFFFFF&src=huoacalendar%40gmail.com&color=%232952A3&src=j7d5p9evkshjmhik3v9po98kus%40group.calendar.google.com&color=%23B1440E&ctz=Pacific%2FHonolulu"
              style={{ border: 0 }}
              width={800}
              height={600}
              frameBorder={0}
              scrolling="no"
            ></iframe>
          </div>
          <div className="phoneContent">
            <iframe
              src="https://www.google.com/calendar/embed?mode=AGENDA&showTitle=0&showPrint=0&height=500&wkst=1&bgcolor=%23FFFFFF&src=huoacalendar%40gmail.com&color=%232952A3&src=j7d5p9evkshjmhik3v9po98kus%40group.calendar.google.com&color=%23B1440E&ctz=Pacific%2FHonolulu"
              style={{ border: 0 }}
              width={280}
              height={500}
              frameBorder={0}
              title="mobile-calendar"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <h2 className="class-schedule__title">{builder[0].title}</h2>
        {builder.map((el,i) => (
          <TitleBody key={i} className="class-schedule__class" props={el} />
        ))}
      </Container>
    </Layout>
  );
};

export default EventsCalendar;
