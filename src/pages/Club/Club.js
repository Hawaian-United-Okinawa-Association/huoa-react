import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ContactInfo from "components/ContactInfo/ContactInfo";
import Title from "components/Title/Title";
import Button from "components/Button/Button";
import SocialMediaLinks from "components/social-media-links/social-media-links";
import Image from "components/Image/Image";

const Club = ({ match }) => {
  let club = useSelector((state) => state.clubs);
  let currentClub = match.params.clubId;
  let clubData = club.find((object) => object.slug === currentClub);
  let button_text;
  
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
          <div className="club__title">
            {!!club_image && (
              <Image className="club_image" img={club_image} alt="club logo" />
            )}
            <Title rendered={rendered}/>
          </div>
          {!!club_description && (
            <div className="club_description" dangerouslySetInnerHTML={{__html: club_description}} />
          )}
          
          {!!club_newsletter && (
            <Button link={club_newsletter}>{button_text ? button_text : "Optional Link"}</Button>
          )}

          { !!club_contact && (
            <ContactInfo body={club_contact} title="Contact Information"/>
          )}

          { !!club_social_media && (
            <SocialMediaLinks links={club_social_media}/>
          )}
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
