import React from 'react';
import { Link } from 'react-router-dom';

import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';
import CardLarge from 'components/CardLarge/CardLarge';
import CardSquare from 'components/CardSquare/CardSquare';
import CardBlast from 'components/CardBlast/CardBlast';
import CardNewsletter from 'components/CardNewsletter/CardNewsletter';
import Container from 'components/Container/Container';

import { ReactComponent as Plant } from '../../assets/donate.svg';
import { ReactComponent as Coin } from '../../assets/amazon.svg';
import { ReactComponent as Car } from '../../assets/car-2.svg';
import { ReactComponent as Chevron } from '../../assets/chevron-down.svg';

const icons = [Plant, Coin, Car];

const Home = ({ data }) => {
  if (!data) return null;

  let { builder } = data;
  let cardsLarge = builder[2].cards_large;
  let cardsSquare = builder[3].cards_small.card;
  let cardBlast = builder[4].cards_custom.cards[0].purple_blast;
  let cardNewsletter = builder[4].cards_custom.cards[1].newsletters;

  return (
    <>
      <Hero props={builder[0]} />
      <TextArea props={builder[1]} />
      <section className="home__section">
        <Container col="2">
          {cardsLarge.map((card, i) => (
            <CardLarge key={i} props={card} />
          ))}
        </Container>
      </section>

      <section className="home__section home__section--community">
        <Container col="1">
          <div className="home__section-header">
            <p>WAYS TO GIVE</p>
            <h2 className="home__title">Support Your Community</h2>
          </div>
        </Container>
        <Container col="3">
          {cardsSquare.map((card, i) => (
            <CardSquare key={i} props={{ ...card, Icon: icons[i] }} />
          ))}
        </Container>
      </section>

      <section className="home__section" id="newsletters">
        <Container col="1">
          <div className="home__section-header">
            <p>LATEST NEWS</p>
            <h2 className="home__title">Join Our Newsletter</h2>
              <Link
              className="home__link"
              to='/latest-news'
              >
              View our latest news <Chevron />
            </Link>
          </div>
        </Container>
        <Container col="2">
          <CardBlast props={cardBlast} />
          <CardNewsletter props={cardNewsletter} />
        </Container>
      </section>
    </>
  );
};

export default Home;