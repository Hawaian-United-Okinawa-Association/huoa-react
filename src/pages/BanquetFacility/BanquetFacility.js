import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';
import ImageBanner from 'components/Image/ImageBanner/ImageBanner.js';
import ImageTitleBodyButton from 'components/Image/ImageTitleBodyButton/ImageTitleBodyButton.js';
import TitleSubtitleBody from 'components/Title/TitleSubtitleBody/TitleSubtitleBody.js';

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
          <ImageBanner 
            image_banner = {image_banner}
          />
          <TitleSubtitleBody 
            title = {title_subtitle_body.title}
            subtitle = {title_subtitle_body.subtitle}
            body = {title_subtitle_body.body}
          />
          <ImageTitleBodyButton
            image = {image_title_body_button.image}
            title = {image_title_body_button.title}
            body = {image_title_body_button.body}
            button = {image_title_body_button.button}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default BanquetFacility;