/*****************************
  TODO: Refactor to use builder data instead
  ###
  First console.log(data); to see how the data is structured
  Our new data is going to live under 'builder'
  Second lets componentize these sections now
    1. Title Body
  NOTE: These components should be placed in folder name with leading name, exampled Title Subtitle Body should live in a title directory
  NOTE: I started this refactor so right now im mapping the builder but lets make it better
  Lastly, please delete this comment
******************************/

import React from 'react';
import Container from 'components/Container/Container';
import Layout from 'components/Layout/Layout';

const MissionAndPurpose = ({ data }) => {
  if (!data) return null;

  let { builder } = data;
  
  return(
    <Layout>
      <Container>
        <div className="about-mission-purpose">
          { builder.map((el, i) =>
            <div key={i}>
              <h2 className="about-mission-purpose__title">
                {el.title_body.title}
              </h2>
              <div className="about-mission-purpose__body" dangerouslySetInnerHTML = {{ __html: el.title_body.body }} />
            </div>
          )}
        </div>
      </Container>
    </Layout>
  )
}
export default MissionAndPurpose;
