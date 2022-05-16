import React, { useEffect } from 'react';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const InstagramFeed = () => {
  useEffect(() => {
    try {
      const widgetScript = document.createElement('script');
      widgetScript.src = 'https://cdn2.woxo.tech/a.js#627ed08e1700cc0021e42d8a';
      widgetScript.async = true;
      document.body.appendChild(widgetScript);

      return () => document.body.removeChild(widgetScript);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getWidgetId() {
    if (window.innerWidth > 768)
      return '43192555-6662-4b27-b056-80229def716b#instagram';
    if (window.innerWidth <= 768 && window.innerWidth > 600)
      return '16df7a4b-89d2-4ea5-b2c0-7a6933bc7534#instagram';
    if (window.innerWidth <= 600)
      return '6fb281cc-0c78-4534-8312-f2587c669895#instagram';
  }

  return (
    <>
      <a
        className="follow-btn"
        href="https://www.instagram.com/hawaiiunitedokinawaassociation"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
        Find Us on Instagram
      </a>
      <script
        src="https://cdn2.woxo.tech/a.js#627ed08e1700cc0021e42d8a"
        async
        data-usrc
      ></script>
      <span className="watermark-cover"></span>
      <div data-mc-src={getWidgetId()}></div>
    </>
  );
};

export default InstagramFeed;
