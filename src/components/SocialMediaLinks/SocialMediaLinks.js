import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Website } from "../../assets/website.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

const SocialMediaLinks = ({ parent }) => {
  return (
    <div className="social">
      {!!parent.website && (
        <Link className="social__item" to={parent.website}>
          <Website />
        </Link>
      )}
      {!!parent.facebook && (
        <Link className="social__item" to={parent.facebook}>
          <Facebook />
        </Link>
      )}
      {!!parent.instagram && (
        <Link className="social__item" to={parent.instagram}>
          <Instagram />
        </Link>
      )}
      {!!parent.twitter && (
        <Link className="social__item" to={parent.twitter}>
          <Twitter />
        </Link>
      )}
    </div>
  );
};
export default SocialMediaLinks;
