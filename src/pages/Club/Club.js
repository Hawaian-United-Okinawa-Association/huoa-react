import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ContactLinks from "components/ContactLinks/ContactLinks";
import Description from "components/Description/Description";
import HeadingTitleImage from "components/HeadingTitleImage/HeadingTitleImage";
import Button from "components/Button/Button";
import SocialMediaLinks from "components/SocialMediaLinks/SocialMediaLinks";

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
          <Breadcrumbs parent="clubs" parentText="Join a HUOA Club" rendered={ rendered } />
          <br />
          <HeadingTitleImage rendered={rendered} image={club_image}/>
          {!!club_description && (
            <Description parent={club_description}/>
          )}
          
          {!!club_newsletter && (
            <Button link={club_newsletter}>Optional Link</Button>
          )}

          { !!club_contact.address || !!club_contact.city_zip || !!club_contact.email || !!club_contact.phone ? (
            <ContactLinks parent={club_contact} parentText="Contact Information"/>
          ) : null }

          <SocialMediaLinks parent={club_social_media}/>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
