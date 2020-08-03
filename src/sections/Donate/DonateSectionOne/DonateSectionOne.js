import React from 'react';

import CustomDonateCol from './../../../components/Custom/CustomDonateCol/CustomDonateCol';
import './DonateSectionOne.scss';

const DonateSectionOne = ({ data }) => {
  return (
    <div className='donate-section-one'>
      <h2 className='donate-section-one--title'>{data.section_title}</h2>
      <div className='donate-section-one--body'>
        <CustomDonateCol data={data.section_body.left}/>
        <CustomDonateCol data={data.section_body.middle}/>
        <CustomDonateCol data={data.section_body.right}/>
      </div>
    </div>
  )
}

export default DonateSectionOne;
