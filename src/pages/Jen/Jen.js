import React from "react";
import { ReactComponent as Download } from 'assets/download.svg';
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";
import Button from 'components/Button/Button';

const Jen = ({ data }) => {

  if (!data) return null;
  else {
    const { title, body, opportunities_list, application_form_link, become_body, mail_to_body, fax_to_body, bottom } = data.volunteer_page;
    return (
      <Layout>
        <div className="volunteer__container">
          <h2 position="left" className="volunteer__title">{title}</h2>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: body}} />
          <Button 
            link= {application_form_link}
            type='filled'>
            Application Form
            <Download className="volunteer__dlbtn" />
          </Button>
          <h4>Opportunities</h4>
          <div className="volunteer__body">
            <Accordion panels={opportunities_list}></Accordion>
          </div>
          <h4>Become a Volunteer</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: become_body}} />
          <h4>Mail to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: mail_to_body}} />
          <h4>Fax to:</h4>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: fax_to_body}} />
          <Button 
            link='/volunteer'
            type='filled'>
            Application Form
            <Download className="volunteer__dlbtn"/>
          </Button>
          <div className="volunteer__description" dangerouslySetInnerHTML={{__html: bottom}} />
        </div>
      </Layout>
    );
  }
};
export default Jen;
