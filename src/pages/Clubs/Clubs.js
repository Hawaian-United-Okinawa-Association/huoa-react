import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "components/Layout/Layout";

import { ReactComponent as Chevron } from 'assets/chevron-down.svg';

const Clubs = ({ data }) => {
  let clubs = useSelector((state) => state.clubs);
  const [query, setQuery] = useState('');
  const filterClubs = club => query.split(' ').every(word => club.title.rendered.toLowerCase().includes(word));
  const resultsNumber = clubs.filter(filterClubs).length;

  if (!data) return null;
  else {
    const { title, body } = data.join_a_club_page;
    const clubsList = clubs.filter(filterClubs).map((club) => {
      return (
        <li key={club.id}>
          <Link className="clubs__item-link" to={"/clubs/" + club.slug}>
            {club.title.rendered} <Chevron />
          </Link>
        </li>
      );
    });
    return (
      <Layout>
        <div className="clubs__container">
          <h2 position="left" className="clubs__title">{title}</h2>
          <div className="clubs__description" dangerouslySetInnerHTML={{__html: body}} />
          <div className="clubs__body">
            <label htmlFor="search" className="clubs__label">Our {clubs.length} Clubs</label>
            <input id="search" onKeyUp={ e => setQuery(e.target.value.trim())} className="clubs__search" placeholder="Find a club"/></div>
            {query && <p>{resultsNumber} result{resultsNumber > 1 ? 's' : ''} found</p>}
            {!!clubs && (
              <ul className="clubs__items">{clubsList}</ul>
            )}
        </div>
      </Layout>
    );
  }
};
export default Clubs;