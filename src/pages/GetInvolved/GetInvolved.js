/*****************************
  TODO: Refactor to use builder data instead
  ###
  First, I have updated our BE page to be Clubs not "Join a Club" so the router will need be updated accordingly
  Secondly lets console.log(data); to see how the data is structured
  Our new data is going to live under 'builder'
  Thirdly lets componentize these sections now
    1. We will need a Title Body Component
    2. The way we list clubs can stay the same
  NOTE: These components should be placed in folder name with leading name, exampled Title Body should live in a title directory
  Fourthly, we should break our GetInvolved.js and Club.js to separate directories. GetInvolved should also become Clubs, GetInvolved is the parent in the nav not this page's name
  Lastly, please delete this comment
******************************/

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";

const GetInvolved = ({ data }) => {
  let clubDataAll = useSelector((state) => state.clubs);

  if (!data) return null;

  const { title, body } = data.join_a_club_page;
  const renderClubs = clubDataAll.map((club) => {
    return (
      <li key={club.id}>
        <Link className="get-involved__item-link" to={"/clubs/" + club.slug}>
          {club.title.rendered}
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <div className="get-involved__container">
        <div className="get-involved__title">
          <h2>{title}</h2>
        </div>
        <div
          className="get-involved__description"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <div className="get-involved__body">
          {!!clubDataAll && (
            <ul className="get-involved__items">{renderClubs}</ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;
