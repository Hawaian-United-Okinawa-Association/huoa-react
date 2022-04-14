import React, { useEffect } from 'react';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';

const InstagramFeed = () => {
  useEffect(() => {
    try {
      const widgetScript = document.createElement('script');
      widgetScript.src = 'https://cdn2.woxo.tech/a.js#624b6caf5446b1002f472bbb';
      widgetScript.async = true;
      document.body.appendChild(widgetScript);

      return () => document.body.removeChild(widgetScript);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getWidgetId() {
    if (window.innerWidth > 768)
      return '692c0277-61bd-4be8-8b9d-b69376463d32#instagram';
    if (window.innerWidth <= 768 && window.innerWidth > 600)
      return 'c3901bcf-3003-4a89-ab75-1236d1ec26a4#instagram';
    if (window.innerWidth <= 600)
      return 'ab83987f-38ce-42bc-9769-5c835b179957#instagram';
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
        src="https://cdn2.woxo.tech/a.js#624b6caf5446b1002f472bbb"
        async
        data-usrc
      ></script>
      <span className="watermark-cover"></span>
      <div data-mc-src={getWidgetId()}></div>
    </>
  );
};

export default InstagramFeed;
