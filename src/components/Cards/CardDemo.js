import React from 'react';

import CardLarge from './CardLarge/CardLarge';
import CardSmall from './CardSmall/CardSmall';
import CardSquare from './CardSquare/CardSquare';
import Container from '../Container/Container';

import './CardDemo.scss';

const CardDemo = props => {
  return (
    <>
      <div className='card-demo--large'>
        <Container col='2'>
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            imageAlt='banquet facility'
            header='Banquet Facility'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
            button='SCHEDULE'
            onClick={() => console.log('you clicked a button')}
          />
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            imageAlt='banquet facility'
            header='Banquet Facility'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
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
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
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
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'
            onClick={() => console.log('You clicked a button')}
          />
        </Container>
      </div>
    </>
  );
};

export default CardDemo;
