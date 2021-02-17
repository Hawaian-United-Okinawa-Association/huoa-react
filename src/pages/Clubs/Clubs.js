import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";
import Title from "components/Title/Title";
import Description from "components/Description/Description";

const Clubs = ({ data }) => {
  let clubs = useSelector((state) => state.clubs);

  if (!data) return null;
  else {
    const { title, body } = data.join_a_club_page;
    const clubsList = clubs.map((club) => {
      return (
        <li key={club.id}>
          <Link className="clubs__item-link" to={"/clubs/" + club.slug}>
            {club.title.rendered}
          </Link>
        </li>
      );
    });
    return (
      <Layout>
        <div className="clubs__container">
          <Title rendered={title} position="left" className="clubs__title"/>
          <Description parent ={body} />
          <div className="clubs__body">
            {!!clubs && (
              <ul className="clubs__items">{clubsList}</ul>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};
export default Clubs;
