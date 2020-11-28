import React from 'react';
import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';

const Home = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <Hero />
      <TextArea props={ data.builder[0] }/>
      <h4>Landing</h4>
    </>
  );
};

export default Home;
