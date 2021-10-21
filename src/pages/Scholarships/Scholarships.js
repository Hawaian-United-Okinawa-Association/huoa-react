import React from "react";

import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";

const Scholarships = ({ data }) => {

  if (!data) return null;
  else {
    const { title, scholarships_list } = data.scholarships_page;
    return (
      <Layout>
        <div className="scholarships__container">
          <h2 position="left" className="scholarships__title">{title}</h2>
          <div className="scholarships__body">
            <Accordion panels={scholarships_list}></Accordion>
          </div>
        </div>
      </Layout>
    );
  }
};
export default Scholarships;
