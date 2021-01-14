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
import { withRouter, Link } from "react-router-dom";

import Layout from "components/Layout/Layout";
import { ReactComponent as Website } from "../../assets/website.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

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
          <p className="club__breadcrumb">
            <Link className="club__breadcrumb--item" to="/">
              Home
            </Link>
            /
            <Link className="club__breadcrumb--item" to="/clubs">
              Join a HUOA Club
            </Link>
            /<span className="club__breadcrumb--item">{rendered}</span>
          </p>
          <br />
          <div className="club__header">
            {!!club_image && (
              <img
                className="club__header--image"
                src={club_image}
                alt="club logo"
              />
            )}
            <div className="club__header--title">{rendered}</div>
          </div>
          {!!club_description && (
            <div
              className="club__description"
              dangerouslySetInnerHTML={{ __html: club_description }}
            />
          )}
          
          {!!club_newsletter && (
            <div className="club__newsletter">
              <a href={club_newsletter}>Optional Link</a>
            </div>
          )}

          { !!club_contact.address || !!club_contact.city_zip || !!club_contact.email || !!club_contact.phone ? (
            <div className="club__contact">
              <div className="club__contact--title">Contact Information</div>
                <div className="club__contact--address">
                   <div>{club_contact.address}</div>
                </div>
                <div className="club__contact--city_zip">
                  {club_contact.city_zip}
                </div>
                <div className="club__contact--email">
                  {club_contact.email}
                </div>
                <div className="club__contact--phone">
                  {club_contact.phone}
                </div>
            </div>
          ) : null }

          <div className="club__social">
            {!!club_social_media.website && (
              <Link
                className="club__social--item"
                to={club_social_media.website}
              >
                <Website />
              </Link>
            )}
            {!!club_social_media.facebook && (
              <Link
                className="club__social--item"
                to={club_social_media.facebook}
              >
                <Facebook />
              </Link>
            )}
            {!!club_social_media.instagram && (
              <Link
                className="club__social--item"
                to={club_social_media.instagram}
              >
                <Instagram />
              </Link>
            )}
            {!!club_social_media.twitter && (
              <Link
                className="club__social--item"
                to={club_social_media.twitter}
              >
                <Twitter />
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
