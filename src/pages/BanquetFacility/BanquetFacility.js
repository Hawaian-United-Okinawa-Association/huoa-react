import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';
import Button from 'components/Button/Button.js';
import Image from 'components/Image/Image.js';

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
          <Image className="banquet-facility__image--triple" img={"https://dev.huoa.org/wp-content/uploads/2020/12/banquet-facility-1.webp"} alt=""></Image>
          <Image className="banquet-facility__image--triple" img={"https://dev.huoa.org/wp-content/uploads/2020/12/banquet-facility-2.webp "} alt=""></Image>
          <Image className="banquet-facility__image--triple" img={"https://dev.huoa.org/wp-content/uploads/2020/12/banquet-facility-3.webp"} alt=""></Image>
        </div>
        <h2 className="banquet-facility__title">{section_one.title}</h2>
        <h4 className="banquet-facility__subtitle">{section_one.subtitle}</h4>
        <div className="banquet-facility__body" dangerouslySetInnerHTML = {createMarkup(section_one.body)}/>
        <h1 className="banquet-facility__section-heading">{section_two.title}</h1>
        <div className="banquet-facility__container">
          <Image className="banquet-facility__image" img={"https://dev.huoa.org/wp-content/uploads/2020/12/banquet-facility-4.webp"} alt=""/>
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
