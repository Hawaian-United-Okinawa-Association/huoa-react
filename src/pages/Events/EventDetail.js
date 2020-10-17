import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import Container from 'components/Container/Container'
import Button from 'components/Button/Button'
import Image from 'components/Image/Image'

import './EventDetail.scss'

const EventDetail = () => {
  return (
    <section className='eventDetails'>
      <Container className='event-details__container'>
        <div className='event-details__div'>
          <h1>Home/Events/Event Details</h1>
          <Image
            className='event-details__image'
            webp='https://mateodevelops-api.imgix.net/image-2.webp'
            img='https://mateodevelops-api.imgix.net/11.png'
          />
          <h4>Month Day, Year | Time</h4>
          <p>Description</p>
          <p>Location</p>
          <Button type='filled' link='https:www.google.com'>
            Application Form
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default EventDetail
