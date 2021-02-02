import React from 'react';

import Hero from 'components/Hero/Hero';
import TextArea from 'components/TextArea/TextArea';
import CardLarge from 'components/Cards/CardLarge/CardLarge';
import CardSquare from 'components/Cards/CardSquare/CardSquare';
import CardBlank from 'components/Cards/CardBlank/CardBlank';
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
            <div className='card-blank--subscribe'>
              <h3>Purple Blast</h3>
              <p>Our monthly online newsletter to keep up to date on what's happening in the Hawaii Okinawa community.</p>
              <input className='card-blank--input' type='text' placeholder='Email Address'></input>
              <Button type='filled' onClick={() => console.log('You clicked a button')}>Subscribe</Button>
            </div>
          </CardBlank>
          <CardBlank>
          <div className='card-blank--newsletter'>
              <h3>Uchinanchu Newsletter</h3>
              {/* TODO: we should never do inline styling */}
              <p style={{marginBottom: '24px'}}>Our official bi-monthly newsletter of HUOA, featuring the latest news and events of the organization as well as tidbits on Okinawan cultural activities and performing arts.</p>
              <div style={{width: '100px'}}>
                <Button type='filled' onClick={() => console.log('You clicked a button')}>SIGNUP</Button>
              </div>
            </div>
          </CardBlank>
        </Container>
      </section>
    </>
  );
};

export default Home;
