import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import { ReactComponent as YouTube } from 'assets/youtube.svg';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Clock } from 'assets/clock.svg';
import { ReactComponent as Mail } from 'assets/mail.svg';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <Layout>
      <Container>
      <div className="contact">
        <h2 className="contact__title">Contact Us</h2>
        <div className="contact__section">
          <div className="contact__col">
            <h3>{data.section_1.section_title}</h3>
            <div dangerouslySetInnerHTML={{ __html: data.section_1.section_body.left }} />
            <h3 className='contact__social-title'>Find Us On</h3>
            <div className="contact__social">
              <a href="https://www.youtube.com/c/HawaiiUnitedOkinawaAssociation" target="_blank" rel="noopener noreferrer">
                <YouTube className='contact__social--item' />
              </a>
              <a href="https://www.instagram.com/hawaiiunitedokinawaassociation/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className='contact__social--item' />
              </a>
              <a href="https://www.facebook.com/HUOA.org/" target="_blank" rel="noopener noreferrer">
                <Facebook className='contact__social--item' />
              </a>
            </div>
          </div>
          <div className="contact__col--right">
             <embed
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.2247443540655!2d-158.00848852522026!3d21.420409474212743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0066f362e7b6bf%3A0x182448718fadf0c6!2sHawaii%20United%20Okinawa%20Association!5e0!3m2!1sfr!2sfr!4v1721130900763!5m2!1sfr!2sfr"
                allowFullscreen=""
                className="contact__map--main"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
        </div>
        <div className="contact__section">
          <h3><Mail/> {data.section_2.section_title}</h3>
          <div className="contact__col" dangerouslySetInnerHTML={{ __html: data.section_2.section_body.full_width }}></div>
        </div>
        <div className="contact__section">
          <h3><Clock/> {data.section_3.section_title}</h3>
          <div className="contact__col" dangerouslySetInnerHTML={{ __html: data.section_3.section_body.left }}></div>
          <div className="contact__col--right" dangerouslySetInnerHTML={{ __html: data.section_3.section_body.right }}></div>
          <div className="contact__col--right">
            <iframe src={data.section_1.section_body.right} className="contact__map--mobile" title="Google Maps" frameBorder="0" aria-hidden="false" tabIndex="0" />
          </div>
        </div>
      </div>
      </Container>
    </Layout>
  );
};

export default Contact;
