import React, { useState, useEffect } from "react";
import Layout from "components/Layout/Layout";
import { Link } from "react-router-dom";
import Axios from "axios";
import './GetInvolved.scss';

//QUESTIONS: OnHover what do? sidebar? pagination? new api call? column breakpoints?


var APIClubRoute = `https://dev.huoa.org/wp-json/wp/v2/clubs`;

const GetInvolved = () => {
  const [items, setItems] = useState([]);

  //using useEffect to preempt pagination
  useEffect(() => {
    Axios.get(APIClubRoute).then((res) => {
      setItems(res.data);
    });
  });

  return (
    <Layout>
      <div className="getinvolved__mainContainer">
          <div className="getinvolved__title">
            <h2>HUOA Club Listing</h2>
          </div>
          <div className="getinvolved__description">
            <p2>Please contact HUOA if you are interested in joining and finding out more about the HUOA clubs.  Contact us at 676-5400.</p2>
          </div>
        <div className="getinvolved__bodycontainer">
          <ul className="getinvolved__items">
            {items.map((item) => {
              return (
                <li className={item}>
                  <Link key={item.id} to={item.link}>
                    {item.slug}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default GetInvolved;