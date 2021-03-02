import React from 'react';

import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';
import CardLarge from 'components/CardLarge/CardLarge';
import CardSquare from 'components/CardSquare/CardSquare';
import CardBlank from 'components/CardBlank/CardBlank';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';

const Home = ({ data }) => {
  if (!data) return null;

  let { builder } = data;
  let cardsLarge = builder[2].cards_large;
  let cardsSquare = builder[3].cards_small.card;

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

      <section className="home__section">
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
          <CardBlank>
            {/* TODO: refactor this is not how we should be styling inner card elements. They should be styled in the Home.scss file. */}
            <div className='card-blank__subscribe'>
              <h3>Purple Blast</h3>
              <p>Our monthly online newsletter to keep up to date on what's happening in the Hawaii Okinawa community.</p>
              <input className='card-blank__input' type='text' placeholder='Email Address'></input>
              <Button type='filled' onClick={() => console.log('You clicked a button')}>Subscribe</Button>
            </div>
          </CardBlank>
          <CardBlank>
          <div className='card-blank__newsletter'>
              <h3>Uchinanchu Newsletter</h3>
              <p>Our official bi-monthly newsletter of HUOA, featuring the latest news and events of the organization as well as tidbits on Okinawan cultural activities and performing arts.</p>
              <Button type='filled' onClick={() => console.log('You clicked a button')}>SIGNUP</Button>
            </div>
          </CardBlank>
        </Container>
      </section>
    </>
  );
};

export default Home;
