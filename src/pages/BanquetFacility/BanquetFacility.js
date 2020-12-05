import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';
import Button from 'components/Button/Button.js';
import Image from 'components/Image/Image.js';
import bfimg1 from 'assets/banquet-facility1.jpg';
import bfimg2 from 'assets/banquet-facility2.jpg';
import bfimg3 from 'assets/banquet-facility3.jpg';

function createMarkup(body) {
  return {__html: body};
  }

const BanquetFacility = ({data}) => {
  if (!data) return null;
  
  let {section_one, section_two} = data.banquet_facility_page;

  return(
    <Layout>
      <Container>
      <div className="banquet-facility">
        <div className="banquet-facility__triple">
          <Image className="banquet-facility__image--triple" img={bfimg1} alt=""></Image>
          <Image className="banquet-facility__image--triple" img={bfimg2} alt=""></Image>
          <Image className="banquet-facility__image--triple" img={bfimg3} alt=""></Image>
        </div>
        <h2 className="banquet-facility__title">{section_one.title}</h2>
        <h4 className="banquet-facility__subtitle">{section_one.subtitle}</h4>
        <div className="banquet-facility__body" dangerouslySetInnerHTML = {createMarkup(section_one.body)}/>
        <h1 className="banquet-facility__section-heading">{section_two.title}</h1>
        <div className="banquet-facility__container">
          <Image className="banquet-facility__image" img={section_two.image} alt=""/>
          <div className="banquet-facility__section">
            <div className="banquet-facility__body--right" dangerouslySetInnerHTML= {createMarkup(section_two.body)}/>
            <Button type="filled" link={section_two.button.link}>{section_two.button.text}</Button>
          </div>
        </div>
      </div>
      </Container>     
    </Layout>
  )
}

export default BanquetFacility;
