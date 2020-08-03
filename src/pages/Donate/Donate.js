import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from './../../actions/index';

import DonateSectionOne from './../../sections/Donate/DonateSectionOne/DonateSectionOne';
import CustomThankYou from './../../components/Custom/CustomThankYou/CustomThankYou';


const Donate = ({ data }) => {
  const dispatch = useDispatch();
  const thankYou = <CustomThankYou />

  return (
    <div>
      { data ? <DonateSectionOne data={data.section_1} /> : null }
      
      <button onClick={() => dispatch(openModal(thankYou))}>Donate here!</button>
    </div>
  )
}

export default Donate;
