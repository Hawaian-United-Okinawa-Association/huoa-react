/*****************************
  TODO: Refactor to use builder data instead
  ###
  First console.log(data); to see how the data is structured
  Our new data is going to live under 'builder'
  Second lets componentize these sections now
  NOTE: These components should be placed in folder name with leading name, exampled Title Subtitle Body should live in a title directory
  Lastly, please delete this comment
******************************/

import React from 'react';

import Layout from 'components/Layout/Layout';
import DonateSectionOne from 'sections/DonateSectionOne/DonateSectionOne';
import DonateSectionTwo from 'sections/DonateSectionTwo/DonateSectionTwo';

const Donate = ({ data }) => {
  if (!data) return null;

  return (
    <div className='page-donate'>
      <Layout>
        <DonateSectionOne data={data.donate_section_one} />
        <DonateSectionTwo data={data.donate_section_two} />
      </Layout>
    </div>
    )
}

export default Donate;
