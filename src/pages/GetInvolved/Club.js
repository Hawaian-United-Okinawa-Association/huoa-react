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
    let { club_description,club_image,club_contact,club_social_media } = clubData.acf.club;
    let { title } = clubData.acf.seo;
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
            /<Link className="club__breadcrumb--item">{title}</Link>
          </p>
          <br />
          <div className="club__header">
            {!club_image ? null : (
              <img
                className="club__header--image"
                src={club_image}
                alt="club logo"
              />
            )}
            <div className="club__header--title">{title}</div>
          </div>
          {!club_description ? null : (
            <div
              classname="club__description"
              dangerouslySetInnerHTML={{ __html: club_description }}
            />
          )}

          {!club_contact.address &&
          !club_contact.email &&
          !club_contact.phone ? null : (
            <div className="club__contact">
              <div className="club__contact--title">Contact Information</div>
              {!!club_contact.address && (
                <div className="club__contact--address">
                  <div>{club_contact.address}</div>
                </div>
              )}
              {!!club_contact.email && (
                <div className="club__contact--email">
                  <div>{club_contact.email}</div>
                </div>
              )}
              {!!club_contact.phone && (
                <div className="club__contact--phone">
                  <div>P: {club_contact.phone}</div>
                </div>
              )}
            </div>
          )}
          <div className="club__social">
            {!club_social_media.website ? null : (
              <Link
                className="club__social--item"
                to={club_social_media.website}
              >
                <Website />
              </Link>
            )}
            {!club_social_media.facebook ? null : (
              <Link
                className="club__social--item"
                to={club_social_media.facebook}
              >
                <Facebook />
              </Link>
            )}
            {!club_social_media.instagram ? null : (
              <Link
                className="club__social--item"
                to={club_social_media.instagram}
              >
                <Instagram />
              </Link>
            )}
            {!club_social_media.twitter ? null : (
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
