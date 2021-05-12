import React from 'react';

import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';
import CardLarge from 'components/CardLarge/CardLarge';
import CardSquare from 'components/CardSquare/CardSquare';
import CardBlast from 'components/CardBlast/CardBlast';
import CardNewsletter from 'components/CardNewsletter/CardNewsletter';
import Container from 'components/Container/Container';

const Home = ({ data }) => {
  if (!data) return null;

  let { builder } = data;
  let cardsLarge = builder[2].cards_large;
  let cardsSquare = builder[3].cards_small.card;
  let cardBlast = builder[4].cards_custom.cards[0].purple_blast;
  let cardNewsletter = builder[4].cards_custom.cards[1].newsletters;

  return (
    <>
      <Hero props={ builder[0] }/>
      <TextArea props={ builder[1] }/>
      <section className="home__section">
        <Container col='2'>
          { cardsLarge.map((card, i) => 
            <CardLarge key={ i } props={card}/>
          )}
        </Container>
      </section>

      <section className="home__section" id="community">
        <Container col='1'>
          <h2 className="home__title">Support Your Community</h2>
        </Container>
        <Container col='3'>
          { cardsSquare.map((card, i) => 
            <CardSquare key={i} props={card}/>
          )}
        </Container>
      </section>

      <section className="home__section" id="newsletters">
        <Container col='1'>
          <h2 className="home__title">Join Our Newsletter</h2>
        </Container>
        <Container col='2'>
          <CardBlast props={ cardBlast }/>
          <CardNewsletter props={ cardNewsletter } />
        </Container>
      </section>
    </>
  );
};

export default Home;
