import React from 'react';

import './CustomDonateCol.scss';

const CustomDonateCol = ({ data }) => {
  return (
    <div className='custom-donate-col'>
      <div className='custom-donate-col--icon'>{data.icon}</div>
      <p className='custom-donate-col--subtitle'>{data.subtitle}</p>
      <p className='custom-donate-col--text'>{data.text}</p>
      <button className='custom-donate-col--modal-link'>Learn More</button>
    </div>
  )
}

export default CustomDonateCol;
