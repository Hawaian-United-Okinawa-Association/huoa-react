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
