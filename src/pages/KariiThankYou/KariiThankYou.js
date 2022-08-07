import Container from 'components/Container/Container';
import React from 'react';
import { ReactComponent as Check } from 'assets/check-circle.svg'; 

const NewPage = () => {
  return (
    <Container>
      <div className='thank-you-page'>
        <h2>Karii 2022</h2>
        <Check className='check-icon'/>
        <p>
          Thank you for your support! Your ticket purchase is confirmed and your
          tickets will be held at “Will Call”. You can pick up your tickets on
          the day of the event. If you need to make any changes, such as the
          name for pick up under “Will Call”, you can email HUOA or Shinka at{' '}
          <a
            href="mailto:info@huoa.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            info@huoa.org
          </a>{' '}
          or{' '}
          <a
            href="mailto:shinkahawaii@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            shinkahawaii@gmail.com
          </a>
        </p>
      </div>
    </Container>
  );
};

export default NewPage;
