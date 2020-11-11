import React from "react";
import { useSelector } from "react-redux";
import Layout from "components/Layout/Layout";
import { Link } from "react-router-dom";
import "./GetInvolved.scss";

const GetInvolved = () => {
  const clubDataAll = useSelector((state) => state.clubs);

  const renderClubs = clubDataAll.map((club) => {
    return (
      <li>
        <Link className="get-involved__item-link" key={club.id} to={club.link}>
          {club.title.rendered}
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <div className="get-involved__container">
        <div className="get-involved__title">
          <h2>HUOA Club Listing</h2>
        </div>
        <div className="get-involved__description">
          <p>
            Please contact HUOA if you are interested in joining and finding out
            more about the HUOA clubs. Contact us at 676-5400.
          </p>
        </div>
        <div className="get-involved__body">
          {clubDataAll.length < 1 ? (
            <h4>Loading Clubs...</h4>
          ) : (
            <ul className="get-involved__items">
              {renderClubs}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;
