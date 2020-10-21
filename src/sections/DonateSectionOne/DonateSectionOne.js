import React from 'react';

import Button from 'components/Button/Button';
import './DonateSectionOne.scss';

const DonateSectionOne = ({ data }) => {
  console.log(data);
  return (
    <div className='donate-section-one'>
      <h1>{data.title}</h1>
      <div>
        <div>
          <p>{data.text}</p>
          <Button link={data.button_link}>{data.button_text}</Button>
        </div>
      </div>
    </div>
  )
}

export default DonateSectionOne;
