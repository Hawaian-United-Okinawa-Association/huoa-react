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

  return (
    <>
      <Hero />
      <TextArea props={ data.builder[0] }/>
      <section className="home__section">
        <Container col='2'>
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            altTag='banquet facility'
            header='Banquet Facility'
            body='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
            button='SCHEDULE'
            onClick={() => console.log('you clicked a button')}
          />
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            altTag='banquet facility'
            header='Banquet Facility'
            body='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
            button='SCHEDULE'
            onClick={() => console.log('you clicked a button')}
          />
        </Container>
      </section>

      <section className="home__section">
        <Container col='1'>
          <h2 className="home__title">Support Your Community</h2>
        </Container>
        <Container col='3'>
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            body='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            body='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            body='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
        </Container>
      </section>

      <section className="home__section">
        <Container col='1'>
          <h2 className="home__title">Join Our Newsletter</h2>
        </Container>
        <Container col='2'>
          <CardBlank>
            <div className='card-blank--subscribe'>
              <h3>Purple Blast</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <input className='card-blank--input' type='text' placeholder='Email Address'></input>
              <Button type='filled' onClick={() => console.log('You clicked a button')}>Subscribe</Button>
            </div>
          </CardBlank>
          <CardBlank>
          <div className='card-blank--newsletter'>
              <h3>Uchinanchu Newsletter</h3>
              <p style={{marginBottom: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
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
