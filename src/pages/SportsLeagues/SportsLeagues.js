import React from "react";
import Layout from "components/Layout/Layout";
import Accordion from "components/Accordion/Accordion";

const SportsLeagues = ({ data }) => {
  if (!data) return null;
  else {
    const { title, sports_leagues_list } = data.sports_leagues;
    return (
      <Layout>
        <div className="sports-leagues__container">
          <h2 position="left" className="sports-leagues__title">{title}</h2>
          <div className="sports-leagues__body">
            <Accordion panels={sports_leagues_list}></Accordion>
          </div>
        </div>
      </Layout>
    );
  }
};
export default SportsLeagues;