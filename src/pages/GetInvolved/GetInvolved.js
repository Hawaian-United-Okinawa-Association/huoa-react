import React from "react";
import { useSelector } from "react-redux";
import Layout from "components/Layout/Layout";
import { Link } from "react-router-dom";
import "./GetInvolved.scss";

const GetInvolved = () => {
  let clubDataAll = useSelector((state) => state.clubs);
  let pageInfo = useSelector((state) => state.pages["join-a-club"]);

  if (!pageInfo) {
    return null;
  } else {
    pageInfo = pageInfo.join_a_club_page;
    pageInfo.body = pageInfo.body.replace(/(<([^>]+)>)/gi, ""); // API object contains html tags here (only). This removes them.
  };

  const renderClubs = clubDataAll.map((club) => {
    return (
      <li key={club.id}>
        <Link className="get-involved__item-link" to={club.link}>
          {club.title.rendered}
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <div className="get-involved__container">
        <div className="get-involved__title">
          <h2>{pageInfo.title}</h2>
        </div>
        <div className="get-involved__description">{pageInfo.body}</div>
        <div className="get-involved__body">
          {!!clubDataAll ? (
            <ul className="get-involved__items">{renderClubs}</ul>
          ) : (
            <h4>Loading Clubs...</h4>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;
