import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from 'actions/index';

import Button from 'components/Button/Button';
import CustomThankYou from 'components/Custom/CustomThankYou/CustomThankYou';

const Donate = () => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />
  const ref = useRef();
  const refTwo = useRef();

  return (
    <div>
      <h4>Donate</h4>
      <Button type='filled' ref={ref} onClick={() => dispatch(openModal(thankYou))} icon>Opens Modal</Button>
      <Button type='outlined' ref={refTwo} onClick={() => console.log('hello')} icon>Say Hello</Button>
      <Button type='text' onClick={() => console.log(ref.current.innerHTML = 'Changed Text')} icon>Change Text on Modal Btn</Button>
      <Button type='filled' onClick={() => console.log(refTwo.current.innerHTML = 'Changed Text')} icon>Change Text on Hello Btn</Button>
    </div>
  )
}

export default Donate;
