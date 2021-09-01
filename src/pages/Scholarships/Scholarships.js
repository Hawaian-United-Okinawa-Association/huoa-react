import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";

// TODO: connect to WP backend to fetch scholarships & page title.
// TODO: render html styling inside panels, instead of plain text. 
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
