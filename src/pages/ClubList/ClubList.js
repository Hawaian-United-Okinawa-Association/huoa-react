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
import Title from "../../components/ListHeader/Title/Title";
import Description from "../../components/ListHeader/Description/Description";

const ClubList = ({ data }) => {
  let clubDataAll = useSelector((state) => state.clubs);

  if (!data) return null;
  else {
    console.log(clubDataAll);
    const { title, body } = data.join_a_club_page;
    const renderClubs = clubDataAll.map((club) => {
      return (
        <li key={club.id}>
          <Link className="clublist__item-link" to={"/clubs/" + club.slug}>
            {club.title.rendered}
          </Link>
        </li>
      );
    });
    return (
      <Layout>
        <div className="clublist__container">
          <Title rendered={title} />
          <Description parent ={body} />
          <div className="clublist__body">
            {!!clubDataAll && (
              <ul className="clublist__items">{renderClubs}</ul>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};
export default ClubList;
