import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container/Container.js'

import './MissionAndPurpose.scss';

export const AboutMissionTemplate = ({
  section_one,
  section_two,
  section_three,
  }) => (
  <div className="about-mission-purpose">
    <h1 className="about-mission-purpose__title">{section_one.title}</h1>
    <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_one.body)}/>
    <h1 className="about-mission-purpose__title">{section_two.title}</h1>
    <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_two.body)}/>
    <h1 className="about-mission-purpose__title">{section_three.title}</h1>
    <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {createMarkup(section_three.body)}/>
  </div>
  )

function createMarkup(body) {
  return {__html: body};
}

const aboutMission = ({ data }) =>{
  if (!data) return null;
  return(
    <Container>
      <AboutMissionTemplate
        section_one = {data.mission_and_purpose.section_one} 
        section_two = {data.mission_and_purpose.section_two}
        section_three = {data.mission_and_purpose.section_three}
      />
    </Container>
  )
}
export default aboutMission;