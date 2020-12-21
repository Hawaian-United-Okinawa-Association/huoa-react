/*****************************
  TODO: Refactor to use builder data instead
  ###
  First console.log(data); to see how the data is structured
  Our new data is going to live under 'builder'
  Second lets componentize these sections
  NOTE: These components should be placed in folder name with leading name, exampled Title Subtitle Body should live in a title directory
  Lastly, please delete this comment
******************************/

import React from 'react';
import Layout from 'components/Layout/Layout';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <Layout>
      <div className="contact">
        <div className="contact__section">
          <div className="contact__col">
          <h3>{ data.section_1.section_title }</h3>
          <div dangerouslySetInnerHTML={{ __html: data.section_1.section_body.left }} />
          </div>
          <div className="contact__col"><iframe src={ data.section_1.section_body.right } className="contact__map" title="Google Maps" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe></div>
        </div>
        <div className="contact__section">
          <h3>{ data.section_2.section_title }</h3>
          <div className="contact__col" dangerouslySetInnerHTML={{ __html: data.section_2.section_body.full_width }}></div>
        </div>
        <div className="contact__section">
          <h3>{ data.section_3.section_title }</h3>
          <div className="contact__col" dangerouslySetInnerHTML={{ __html: data.section_3.section_body.left }}></div>
          <div className="contact__col" dangerouslySetInnerHTML={{ __html: data.section_3.section_body.right }}></div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
