import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';
import ImageBanner from 'components/ImageBanner/ImageBanner.js';
import ImageTitleBodyButton from 'components/ImageTitleBodyButton/ImageTitleBodyButton.js';
import TitleSubtitleBody from 'components/TitleSubtitleBody/TitleSubtitleBody.js';

const BanquetFacility = ({ data }) => {
  if (!data) return null;
  let { builder } = data;
  let [image_banner, title_subtitle_body, image_title_body_button] = builder;

  return(
    <Layout>
      <Container>
        <div className="banquet-facility">
          <ImageBanner
            images={ image_banner.image_banner.images }
          />
          <TitleSubtitleBody
            title = {title_subtitle_body.title_subtitle_body.title}
            subtitle = {title_subtitle_body.title_subtitle_body.subtitle}
            body = {title_subtitle_body.title_subtitle_body.body}
          />
          <ImageTitleBodyButton
            image = {image_title_body_button.image_title_body_button.image}
            title = {image_title_body_button.image_title_body_button.title}
            body = {image_title_body_button.image_title_body_button.body}
            button = {image_title_body_button.image_title_body_button.button}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default BanquetFacility;
