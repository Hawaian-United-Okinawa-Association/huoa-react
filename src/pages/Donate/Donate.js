import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'actions/index';

import Button from 'components/Button/Button';
import CustomThankYou from 'components/Custom/CustomThankYou/CustomThankYou';

const Donate = () => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />

  return (
    <div>
      <h4>Donate</h4>
      <Button type='filled' onClick={() => dispatch(openModal(thankYou))} icon>Opens Modal</Button>
      <Button type='outlined' onClick={() => console.log('hello')} icon>Say Hello</Button>
      <Button type='text' onClick={() => console.log('hello')} icon>Button Text</Button>
    </div>
  )
}

export default Donate;
