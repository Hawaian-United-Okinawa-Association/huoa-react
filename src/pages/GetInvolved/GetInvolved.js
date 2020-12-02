import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";

const createMarkup = (body) => {
  return {__html: body};
}

const GetInvolved = ({data}) => {
  let clubDataAll = useSelector((state) => state.clubs);

  if (!data) {
    return null;
  } else {
    data = data.join_a_club_page;
  };

  const renderClubs = clubDataAll.map((club) => {
    return (
      <li key={club.id}>
        <Link className="get-involved__item-link" to={'/clubs/' + club.slug}>
          {club.title.rendered}
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <div className="get-involved__container">
        <div className="get-involved__title">
          <h2>{data.title}</h2>
        </div>
        <div className="get-involved__description" dangerouslySetInnerHTML={createMarkup(data.body)} />
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
