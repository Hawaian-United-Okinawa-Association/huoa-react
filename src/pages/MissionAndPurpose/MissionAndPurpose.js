import React from 'react';
import Container from 'components/Container/Container';
import Layout from 'components/Layout/Layout';
import Builder from 'components/Builder/Builder';

const MissionAndPurpose = ({ data }) => {
  if (!data) return null;

  let { builder } = data;

  return builder && (
    <Layout>
      <Container>
        <div className="about-mission-purpose">
          <Builder components={ builder } />
        </div>
      </Container>
    </Layout>
  )
}
export default MissionAndPurpose;
