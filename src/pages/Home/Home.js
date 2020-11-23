import React from 'react';
import Hero from 'components/Hero/Hero';

const Home = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <Hero />
      <h4>Landing</h4>
    </>
  );
};

export default Home;
