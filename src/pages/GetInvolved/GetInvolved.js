import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import Layout from "components/Layout/Layout";
import { Link } from "react-router-dom";
// import Axios from "axios";
import './GetInvolved.scss';
import { render } from "@testing-library/react";





const GetInvolved = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
    // Axios.get(APIClubRoute).then((res) => {
    //   setItems(res.data);
    // });
  // });


  ///////////////////////////////////////////////////REDUX/////////////////////////////////////////////////////////  
  const clubDataAll = useSelector(state => state.clubs)

  console.log(clubDataAll)
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////  

  const renderClubs = clubs => {
    return clubs.map((club) => {
      return (
        <li>
          <Link className="getinvolved__items--link" key={club.id} to={club.link}>
            {club.title.rendered}
          </Link>
        </li>
      )
    })
  }

  return (
    <Layout>
      <div className="get-involved__mainContainer">
          <div className="get-involved__title">
            <h2>HUOA Club Listing</h2>
          </div>
          <div className="get-involved__description">
            <p2>Please contact HUOA if you are interested in joining and finding out more about the HUOA clubs.  Contact us at 676-5400.</p2>
          </div>
        <div className="getinvolved__bodycontainer">
          <ul className="getinvolved__items">
            {renderClubs(clubDataAll)}
          </ul>
        </div>
      </div>
    </Layout>
  // );
  )};

export default GetInvolved;