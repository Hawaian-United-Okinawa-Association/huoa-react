import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import Accordion from 'components/Accordion/Accordion';

const HUOATeam = ({ data }) => {
  if (!data) return null;
  return (
    <Layout>
      <Container>
        <div className='huoa-team'>
        <h2>{data.huoa_team_page.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.huoa_team_page.body,
            }}
          />
        <Accordion panels={data.huoa_team_page.huoa_team_list}/>
        </div>
      </Container>
    </Layout>
  );
};

export default HUOATeam;