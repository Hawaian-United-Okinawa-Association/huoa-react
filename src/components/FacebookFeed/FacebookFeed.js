import React from 'react';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';

const FacebookFeed = () => {
  const adaptiveWidth = window.innerWidth < 500 ? window.innerWidth - 32 : 500;

  return (
    <div className="facebook-feed">
      <a
        className="follow-btn"
        href="https://www.facebook.com/102076776586255"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
        Find Us on Facebook
      </a>
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHUOA.org&tabs=timeline&width=${adaptiveWidth}&height=700&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true`}
        title="Facebook Page"
        width="100%"
        height="700"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default FacebookFeed;
