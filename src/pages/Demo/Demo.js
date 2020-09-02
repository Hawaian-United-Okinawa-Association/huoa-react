import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'actions/index';

import Container from 'components/Container/Container';
import Button from 'components/Button/Button';
import CustomThankYou from 'components/Custom/CustomThankYou/CustomThankYou';

import './Demo.scss';

const Demo = () => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />
  const ref = useRef();

  return (
    <section>
      <h1>Demo Page</h1>
      <Container>
        <div className='demo__buttons'>
          <Button type='filled' onClick={() => dispatch(openModal(thankYou))}>Opens Modal</Button>
          <Button type='outlined' ref= {ref} onClick={() => console.log('hello')}>Say Hello</Button>
          <Button type='text' onClick={() => console.log(ref.current.innerHTML = 'Changed Say Hello')} icon>Change Hello</Button>
          <Button type='filled' link='https:www.google.com'>Ext Link (Google)</Button>
          <Button type='outlined' link='/donate'>Int Link (Donate)</Button>
        </div>
      </Container>
    </section>
  );
};

export default Demo;
