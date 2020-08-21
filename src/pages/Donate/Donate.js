import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'actions/index';

import Button from 'components/Button/Button';
import CustomThankYou from 'components/Custom/CustomThankYou/CustomThankYou';

const Donate = () => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />
  const buttonRef = useRef(null);

  return (
    <div>
      <h4>Donate</h4>
      <Button type='filled' buttonRef={buttonRef} onClick={() => dispatch(openModal(thankYou))} icon>Opens Modal</Button>
      <Button type='outlined' buttonRef={buttonRef} onClick={() => console.log('hello')} icon>Say Hello</Button>
      <Button type='text' buttonRef={buttonRef} onClick={() => console.log('hello')} icon>Button Text</Button>
      <Button link='https://huoa.org/contact' buttonRef={buttonRef}>Homepage</Button>
      <Button link='https://www.google.com/' buttonRef={buttonRef}>Google</Button>
    </div>
  )
}

export default Donate;
