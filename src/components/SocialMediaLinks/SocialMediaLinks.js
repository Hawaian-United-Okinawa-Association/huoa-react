import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Website } from "../../assets/website.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

const SocialMediaLinks = ({ links }) => {
  return (
    <div className="social-media">
      {!!links.website && (
        <Link className="social-media__item" to={links.website}>
          <Website />
        </Link>
      )}
      {!!links.facebook && (
        <Link className="social-media__item" to={links.facebook}>
          <Facebook />
        </Link>
      )}
      {!!links.instagram && (
        <Link className="social-media__item" to={links.instagram}>
          <Instagram />
        </Link>
      )}
      {!!links.twitter && (
        <Link className="social-media__item" to={links.twitter}>
          <Twitter />
        </Link>
      )}
    </div>
  );
};
export default SocialMediaLinks;
