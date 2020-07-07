import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from './../../actions/index';

import CustomThankYou from './../../components/Custom/CustomThankYou/CustomThankYou';

const Donate = () => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />

  return (
    <div>
      <h4>Donate</h4>
      <button onClick={() => dispatch(openModal(thankYou))}>Donate here!</button>
    </div>
  )
}

export default Donate;
