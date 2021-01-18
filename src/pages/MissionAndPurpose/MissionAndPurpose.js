import React from 'react';
import Container from 'components/Container/Container.js';
import Layout from 'components/Layout/Layout.js';


function createMarkup(body) {
  return {__html: body};
}

const MissionAndPurpose = ({data}) => {
  if (!data) return null;

  let { builder } = data;

  return(
    <Layout>
      <Container>
        <div className="about-mission-purpose">
          <h2 className="about-mission-purpose__title">{builder[0].title_body.title}</h2>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(builder[0].title_body.body)}/>
          <h2 className="about-mission-purpose__title">{builder[1].title_body.title}</h2>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(builder[1].title_body.body)}/>
          <h2 className="about-mission-purpose__title">{builder[2].title_body.title}</h2>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(builder[2].title_body.body)}/>
        </div>
      </Container>
    </Layout>
  )
}
export default MissionAndPurpose;
