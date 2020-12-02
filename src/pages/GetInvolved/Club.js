import React from "react";
import { useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Layout from "components/Layout/Layout";

const Club = ({ match }) => {
  let clubDataAll = useSelector((state) => state.clubs);
  let currentClub = `${match.params.clubId}`;
  let clubData = useSelector((state) =>
    clubDataAll.find((object) => object.slug === currentClub)
  );

  if (!clubData) {
    return null;
  } else {
    const createMarkup = () => {
      return { __html: clubData.acf.club.club_description };
    };
    return (
      <Layout>
        <div className="club__container">
          <p className="club__nav">
            <Link className="club__nav--item" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="club__nav--item" to="/clubs">
              Join a HUOA Club
            </Link>{" "}
            / {clubData.acf.seo.title}
          </p>
          <br />
          <div className="club__header">
            {!clubData.acf.club.club_image ? null : (
              <img
                className="club__header--image"
                src={`${clubData.acf.club.club_image}`}
                alt="club image"
              />
            )}
            <div className="club__header--title">{clubData.acf.seo.title}</div>
          </div>
          {!clubData.acf.club.club_description ? null : (
            <div
              classname="club__description"
              dangerouslySetInnerHTML={createMarkup()}
            />
          )}

          {!clubData.acf.club.club_contact.address &&
          !clubData.acf.club.club_contact.email &&
          !clubData.acf.club.club_contact.phone ? null : (
            <div className="club__contact">
              <div className="club__contact--title">Contact Information</div>
              <div className="club__contact--address">
                {!clubData.acf.club.club_contact.address ? null : (
                  <div>{clubData.acf.club.club_contact.address}</div>
                )}
              </div>
              <div className="club__contact--email">
                {!clubData.acf.club.club_contact.email ? null : (
                  <div>{clubData.acf.club.club_contact.email}</div>
                )}
              </div>
              <div className="club__contact--phone">
                {!clubData.acf.club.club_contact.phone ? null : (
                  <div>P: {clubData.acf.club.club_contact.phone}</div>
                )}
              </div>
            </div>
          )}
          <div className="club__social">
            {!clubData.acf.club.club_social_media.website ? null : (
              <Link
                className="club__social--website"
                to={clubData.acf.club.club_social_media.website}
              >
                {/* NOTE: need a website svg */}
                <img src="../../../assets/facebook.svg" alt="website" />
              </Link>
            )}
            {!clubData.acf.club.club_social_media.facebook ? null : (
              <Link
                className="club__social--facebook"
                to={clubData.acf.club.club_social_media.facebook}
              >
                <img src="../../../assets/facebook.svg" alt="facebook" />
              </Link>
            )}
            {!clubData.acf.club.club_social_media.instagram ? null : (
              <Link
                className="club__social--instagram"
                to={clubData.acf.club.club_social_media.instagram}
              >
                <img src="../../../assets/instagram.svg" alt="instagram" />
              </Link>
            )}
            {!clubData.acf.club.club_social_media.twitter ? null : (
              <Link
                className="club__social--twitter"
                to={clubData.acf.club.club_social_media.twitter}
              >
                <img src="../../../assets/twitter.svg" alt="twitter" />
              </Link>
            )}
          </div>
        </div>
      </Layout>
    );
  }
};

export default withRouter(Club);
