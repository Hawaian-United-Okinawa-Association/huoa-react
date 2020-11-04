import React from 'react';
// import PropTypes from 'prop-types'
import Container from '../../../components/Container/Container.js'

import './MissionAndPurpose.scss';

export const AboutMissionTemplate = ({
    section_uno,
    section_two,
    section_three,
    }) => (
        <div className="about-mission-purpose--content" style= {{textAlign:"left"}}>
            <h1 className="title section-one__title">{section_uno.title}</h1>
            <div className="body section-one__body" dangerouslySetInnerHTML = {createMarkup(section_uno.body)}/>
            <h1 className="title section-two__title">{section_two.title}</h1>
            <div className="body section-two__body" dangerouslySetInnerHTML = {createMarkup(section_two.body)}/>
            <h1 className="title section-three__title">{section_three.title}</h1>
            <div className="body section-three__body" dangerouslySetInnerHTML = {createMarkup(section_three.body)}/>
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
                section_uno = {data.mission_and_purpose.section_one} 
                section_two = {data.mission_and_purpose.section_two}
                section_three = {data.mission_and_purpose.section_three}
            />
        </Container>
    )
    
    

}

export default aboutMission;

// https://dev.huoa.org/wp-json/wp/v2/pages/312

