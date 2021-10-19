import React from "react";

import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";
import Button from 'components/Button/Button';

const Volunteer = ({ data }) => {

  if (!data) return null;
  else {
    const { title, body, opportunities_list, application_form_link, become_body, mail_to_body, fax_to_body, bottom } = data.volunteer_page;
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
          {/* <div className="contact__section">
          <div className="contact__col">
            <h4>Become a Volunteer</h4>
            <div dangerouslySetInnerHTML={{ __html: become_body }} />
            <Button 
            link='/volunteer'
            type='filled'>
            Application Form
          </Button>
        <div className="volunteer__description" dangerouslySetInnerHTML={{__html: bottom}} />
          </div>
          <div className="contact__col--right">
          <h4>Mail to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: mail_to_body}} />
          <h4>Fax to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: fax_to_body}} />
          </div>
        </div> */}

          <h4>Become a Volunteer</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: become_body}} />
          <h4>Mail to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: mail_to_body}} />
          <h4>Fax to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: mail_to_body}} />
          <Button 
            link='/volunteer'
            type='filled'>
            Application Form
          </Button>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: bottom}} />
        </div>
      </Layout>
    );
  }
};
export default Volunteer;
