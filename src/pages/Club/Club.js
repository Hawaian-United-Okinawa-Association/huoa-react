import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import ClubContactInfo from "components/ClubContactInfo/ClubContactInfo";
import Title from "components/Title/Title";
import Button from "components/Button/Button";
import SocialMediaLinks from "components/SocialMediaLinks/SocialMediaLinks";
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
          <Breadcrumbs parent="join-a-club" parentText="Join a HUOA Club" rendered={rendered} />
          <br />
          <div className="club__title-box">
            {!!club_image && (
              <Image className="club__image" img={club_image} alt="club logo" />
            )}
            <Title rendered={rendered} className="left" />
          </div>
          {!!club_description && (
            <div className="club__description" dangerouslySetInnerHTML={{ __html: club_description }} />
          )}

          {!!club_newsletter && (
            <Button link={club_newsletter}>{button_text ? button_text : "Optional Link"}</Button>
          )}

          {club_contact.address !== "" || club_contact.city_zip !== "" || club_contact.email !== "" || club_contact.phone !== "" ? 
            <ClubContactInfo body={club_contact} /> 
            : null
          }

          {!!club_social_media && (
            <SocialMediaLinks links={club_social_media} />
          )}
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
