/*****************************
  TODO: Refactor
  ###
  Lets componentize these sections now
    1. We will need a Breadcrumbs component
    2. Club Header component
    3. Club Body component
    4. Club Contact component
  NOTE: These components should be placed in folder name with leading name, exampled Title Subtitle Body should live in a title directory
  Lastly, please delete this comment
******************************/

import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Contact from "components/Builder/Contact/Contact";
import Description from "components/Builder/Description/Description";
import Header from "components/Builder/Header/Header";
import Newsletter from "components/Builder/Newsletter/Newsletter";
import Social from "components/Builder/Social/Social";

const Club = ({ match }) => {
  let clubDataAll = useSelector((state) => state.clubs);
  let currentClub = match.params.clubId;
  let clubData = clubDataAll.find((object) => object.slug === currentClub);

  if (!clubData) {
    return null;
  } else {
    let {
      club_description,
      club_image,
      club_contact,
      club_social_media,
      club_newsletter,
    } = clubData.acf.club;
    let { rendered } = clubData.title;
    return (
      <Layout>
        <div className="club__container">
          <Header rendered={rendered} image={club_image}/>
          {!!club_description && (
            <Description parent={club_description}/>
          )}
          
          {!!club_newsletter && (
            <Newsletter parent={club_newsletter} />
          )}

          { !!club_contact.address || !!club_contact.city_zip || !!club_contact.email || !!club_contact.phone ? (
            <Contact parent={club_contact} parentText="Contact Information"/>
          ) : null }

          <Social parent={club_social_media}/>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
