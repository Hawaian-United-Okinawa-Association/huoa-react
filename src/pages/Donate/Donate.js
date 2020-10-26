import React from 'react';

import DonateSectionOne from 'sections/DonateSectionOne/DonateSectionOne';
import DonateSectionTwo from 'sections/DonateSectionTwo/DonateSectionTwo';

const Donate = ({ data }) => {
  if (!data) return null;

  return (
    <div className='page-donate'>
      <DonateSectionOne data={data.donate_section_one} />
      <DonateSectionTwo data={data.donate_section_two} />
    </div>
    )
}

export default Donate;
