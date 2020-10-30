import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import Image from 'components/Image/Image'
import Layout from 'components/Layout/Layout'

import './EventDetail.scss'

let eventTitle = "Event Title";
let eventDescription = 'Event Description';




const EventDetail = () => {
  return (
    <Layout>
      <Container className='eventdetail__container'>
        <div className='eventdetail__div'>
          <h4>Home / Events /<span className='eventdetail__span'> {eventTitle}</span></h4>
          <h2>{eventTitle}</h2>
          <Image
            className='eventdetail__image'
            webp='https://mateodevelops-api.imgix.net/image-2.webp'
            img='https://mateodevelops-api.imgix.net/11.png'
          />
          <h4>Month Day, Year | Time</h4>
          <h5>{eventDescription}</h5>
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
