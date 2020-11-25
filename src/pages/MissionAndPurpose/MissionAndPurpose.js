import React from 'react';
import Container from 'components/Container/Container.js';
import Layout from 'components/Layout/Layout.js';
import './MissionAndPurpose.scss';

function createMarkup(body) {
  return {__html: body};
}

const MissionAndPurpose = ({data}) => {
  if (!data) return null;

  let {section_one, section_two, section_three} = data.mission_and_purpose;
  return(
    <Layout>
      <Container>
        <div className="about-mission-purpose">
          <h1 className="about-mission-purpose__title">{section_one.title}</h1>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_one.body)}/>
          <h1 className="about-mission-purpose__title">{section_two.title}</h1>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_two.body)}/>
          <h1 className="about-mission-purpose__title">{section_three.title}</h1>
          <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_three.body)}/>
        </div>
      </Container>
    </Layout>
  )
}
export default MissionAndPurpose;