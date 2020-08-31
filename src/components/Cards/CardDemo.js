import React from 'react';

import CardLarge from './CardLarge/CardLarge';
import CardSmall from './CardSmall/CardSmall';
import CardSquare from './CardSquare/CardSquare';
import Container from '../Container/Container';

import './CardDemo.scss';

const CardDemo = props => {
  return (
    <>
      <div className='cards--large'>
        <Container col='2'>
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            imageAlt='banquet facility'
            header='Banquet Facility'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
            button='SCHEDULE'></CardLarge>
          <CardLarge
            image='https://huoa.org/nuuzi/banquetfacility/hoc.jpg'
            imageAlt='banquet facility'
            header='Banquet Facility'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event. It will probably be a few sentences.'
            button='SCHEDULE'></CardLarge>
        </Container>
      </div>
      <div className='cards--small'>
        <h2 style={{ textAlign: 'center' }}>What's New</h2>
        <Container col='4'>
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'></CardSmall>
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'></CardSmall>
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'></CardSmall>
          <CardSmall
            image='https://huoa.org/nuuzi/data1/images/2018FestBonDanceGY.jpg'
            imageAlt='dancing'
            header='Headline Here'
            paragraph='Description and it its a pretty short. Nothing too long here.'
            button='Button Text'></CardSmall>
        </Container>
      </div>
      <div className='cards--square'>
        <h2 style={{ textAlign: 'center' }}>Support Your Community</h2>
        <Container col='3'>
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'></CardSquare>
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'></CardSquare>
          <CardSquare
            header='Kokua In Kind'
            subheader='Lorem Subhead Goes Here'
            paragraph='Description and it its a bit longer because it is giving more detailed information about the event.'
            button='LEARN MORE'></CardSquare>
        </Container>
      </div>
    </>
  );
};

export default CardDemo;
