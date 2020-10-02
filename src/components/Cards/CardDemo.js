import React from 'react';

import CardLarge from './CardLarge/CardLarge';
import CardSmall from './CardSmall/CardSmall';
import CardSquare from './CardSquare/CardSquare';
import CardBlank from './CardBlank/CardBlank';
import Container from '../Container/Container';
import Button from '../Button/Button'

import './CardDemo.scss';

const CardDemo = props => {
  return (
    <>
      <div className='card-demo--large'>
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
      </div>
      <div className='card-demo--small'>
        <h2 style={{ textAlign: 'center' }}>What's New</h2>
        <Container col='4'>
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            altTag='dancing'
            header='Headline Here'
            body='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            altTag='dancing'
            header='Headline Here'
            body='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            altTag='dancing'
            header='Headline Here'
            body='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            altTag='dancing'
            header='Headline Here'
            body='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
        </Container>
      </div>
      <div className='card-demo--square'>
        <h2 style={{ textAlign: 'center' }}>Support Your Community</h2>
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
      </div>
      <div style={{padding: '0 30px', margin: '20px'}}>
        <h2 style={{ textAlign: 'center' }}>Blank Cards</h2>
        <Container col='2'>
          <CardBlank>
            <div style={{ textAlign: 'left', padding: '50px 80px 50px 80px' }}>
            <h3>Purple Blast</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <input style={{borderRadius: '4px', borderStyle: 'solid', marginBottom: '15px', padding: '10px'}}  type='text' placeholder='Email Address'></input>
            <Button type='filled' onClick={() => console.log('You clicked a button')}>Subscribe</Button>
            </div>
          </CardBlank>
          <CardBlank>
            <div style={{ textAlign: 'left', padding: '80px' }}>
              <h3>Uchinanchu Newsletter</h3>
              <p style={{marginBottom: '24px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <div style={{width: '100px'}}>
                <Button type='filled' onClick={() => console.log('You clicked a button')}>SIGNUP</Button>
              </div>
            </div>
          </CardBlank>
        </Container>
      </div>
    </>
  );
};

export default CardDemo;
