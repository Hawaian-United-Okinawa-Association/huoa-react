import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import Hero from 'components/Hero/Hero';

const HawaiiOkinawaPlaza = ({ data }) => {
  if (!data) return null;
  return (
    <Layout>
      <Container>
        <div className="hawaii-okinawa-plaza">
          <h2>{data.builder[0].title_body.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.builder[0].title_body.body,
            }}
          />
          <Hero props={data.builder[1]} />
          <h4>{data.builder[2].title_body.title}</h4>
          <div
            className="hawaii-okinawa-plaza__timeline"
            dangerouslySetInnerHTML={{
              __html: data.builder[2].title_body.body,
            }}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default HawaiiOkinawaPlaza;
