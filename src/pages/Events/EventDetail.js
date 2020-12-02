import React from 'react';
import { useSelector } from "react-redux";
import Container from 'components/Container/Container';
import { Link } from "react-router-dom";
import Button from 'components/Button/Button';
import Image from 'components/Image/Image';
import Layout from 'components/Layout/Layout';
import './EventDetail.scss';

// TODO add api calls

const EventDetail = () => {
  const event = useSelector((state) => state.clubs);
  return (
    <Layout>
      <Container className='eventdetail__container'>
        <div className='eventdetail__title'>
          <h4>Home / Events /<span className='eventdetail__span'> {eventTitle}</span></h4>
          <h2>{event.title.rendered}</h2>
        </div>
        <div className='eventdetail__content'>
          <Image
            className='eventdetail__image'
            webp='https://mateodevelops-api.imgix.net/image-2.webp'
            img='https://mateodevelops-api.imgix.net/11.png'
          />
          <h4>Month Day, Year | Time</h4>
          <h5>{event. }</h5>
          <h5>Location</h5>
          <Button type='filled' link='https:www.google.com'>
            Application Form
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

export default EventDetail
