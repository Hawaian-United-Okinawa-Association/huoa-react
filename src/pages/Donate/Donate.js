import React from 'react';

import Button from './../../components/Button/Button';
import CustomThankYou from './../../components/Custom/CustomThankYou/CustomThankYou';

const Donate = () => {
  const thankYou = <CustomThankYou />

  return (
    <div>
      <h4>Donate</h4>
      <Button type='filled' modal={thankYou}>Opens Modal</Button>
    </div>
  )
}

export default Donate;
