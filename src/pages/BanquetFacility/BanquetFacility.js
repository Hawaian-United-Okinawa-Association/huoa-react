/*****************************
  TODO: Refactor to use builder data instead
  ###
  First console.log(data); to see how the data is structured
  Our new data is going to live under 'builder'
  Second lets componentize these sections now, we should end up with 3 components
    1. Image Banner
    2. Title Subtitle Body
    3. Image Title Body Button
  NOTE: These components should be placed in folder name with leading name, exampled Title Subtitle Body should live in a title directory
  Lastly, please delete this comment
******************************/

import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';
import Button from 'components/Button/Button.js';
import Image from 'components/Image/Image.js';

function createMarkup(body) {
  return {__html: body};
  }

const BanquetFacility = ({ data }) => {

if (!data) return null;

let { builder } = data;
let [image_banner, title_subtitle_body, image_title_body_button] = builder;

image_banner = image_banner.image_banner;
title_subtitle_body = title_subtitle_body.title_subtitle_body;
image_title_body_button= image_title_body_button.image_title_body_button;

  return(
    <Layout>
      <Container>
        <div className="banquet-facility">
          <div className="banquet-facility__triple">
          {image_banner.map((el, i) =>  {
            return <Image key={i} className="banquet-facility__image--triple" img={el.url} alt={el.alt}></Image>      
          })}
          </div>
          <h2 className="banquet-facility__title--page">{title_subtitle_body.title}</h2>
          <h4 className="banquet-facility__subtitle">{title_subtitle_body.subtitle}</h4>
          <div className="banquet-facility__body" dangerouslySetInnerHTML = {createMarkup(title_subtitle_body.body)}/>
          <h1 className="banquet-facility__section-heading">{image_title_body_button.title}</h1>
          <div className="banquet-facility__container">
            <Image className="banquet-facility__image" img={image_title_body_button.image.url} alt="" />
            <div className="banquet-facility__section">
              <div className="banquet-facility__body--right" dangerouslySetInnerHTML= {createMarkup(image_title_body_button.body)}/>
              <Button type="filled" link={image_title_body_button.button.link}>{image_title_body_button.button.text}</Button>
            </div>
          </div> 
        </div>
      </Container>
    </Layout>
  )
}

export default BanquetFacility;
