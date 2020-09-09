import React from 'react';

import DonateSectionOne from 'sections/DonateSectionOne/DonateSectionOne';

const Donate = ({ data }) => {
  if (!data) return null;

  return (
    <div className='page-donate'>
      <DonateSectionOne data={data.donate_section_one} />
    </div>
    )
}

export default Donate;
