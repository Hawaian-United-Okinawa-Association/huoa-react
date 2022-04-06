import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';

const News = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn2.woxo.tech/a.js#624b6caf5446b1002f472bbb';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [activeTab, setActiveTab] = useState('facebook');

  return (
    <Layout>
      <Container>
        <div className="news">
          <h2>Latest News</h2>
          <select
            className="news__mobile-select"
            onChange={e => setActiveTab(e.target.value)}
          >
            <option value={'facebook'}>From Facebook</option>
            <option value={'instagram'}>From Instagram</option>
          </select>
          <div className="news__desktop-select">
            <button
              className={`news__tab ${
                activeTab === 'facebook' && 'news__tab--active'
              }`}
              onClick={() => setActiveTab('facebook')}
            >
              from facebook
            </button>
            <button
              className={`news__tab ${
                activeTab === 'instagram' && 'news__tab--active'
              }`}
              onClick={() => setActiveTab('instagram')}
            >
              from instagram
            </button>
          </div>
          <section className="news__feeds">
            <div
              className="news__facebook-feeds"
              style={{
                display: activeTab === 'facebook' ? 'block' : 'none',
              }}
            >
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHUOA.org&tabs=timeline&width=${
                  window.innerWidth - 70
                }&height=700&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId`}
                title="Facebook Page"
                width="100%"
                height="700"
                scrolling="no"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div
              className="news__instagram-feeds"
              style={{
                display: activeTab === 'instagram' ? 'block' : 'none',
              }}
            >
              <span className="watermark-cover"></span>
              <script
                src="https://cdn2.woxo.tech/a.js#624b6caf5446b1002f472bbb"
                async
                data-usrc
              ></script>
              <div data-mc-src="ab83987f-38ce-42bc-9769-5c835b179957#instagram"></div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default News;
