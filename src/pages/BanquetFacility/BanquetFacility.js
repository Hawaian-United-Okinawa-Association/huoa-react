import React from 'react';
import Layout from 'components/Layout/Layout.js';
import Container from 'components/Container/Container.js';

import Builder from 'components/Builder/Builder.js';

const BanquetFacility = ({ data }) => {
  if (!data) return null;
  let { builder } = data;

  return (
    <Layout>
      <Container>
        <div className="banquet-facility">
          <Builder components={ builder } />
        </div>
      </Container>
    </Layout>
  )
}

export default BanquetFacility;
