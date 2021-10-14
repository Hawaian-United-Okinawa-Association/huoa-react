import React from "react";

import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";
import Button from 'components/Button/Button';

const Volunteer = ({ data }) => {

  if (!data) return null;
  else {
    const { title, body, opportunities_list, application_form } = data.volunteer_page;
    return (
      <Layout>
        <div className="volunteer__container">
          <h2 position="left" className="volunteer__title">{title}</h2>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: body}} />
          <Button 
            link='/volunteer'
            type='filled'>
            Application Form
          </Button>
          <h4>Opportunities</h4>
          <div className="volunteer__body">
            <Accordion panels={opportunities_list}></Accordion>
          </div>
        </div>
      </Layout>
    );
  }
};
export default Volunteer;
