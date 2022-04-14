import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';
import FacebookFeed from 'components/FacebookFeed/FacebookFeed';
import InstagramFeed from 'components/InstagramFeed/InstagramFeed';

const News = () => {
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
              From Facebook
            </button>
            <button
              className={`news__tab ${
                activeTab === 'instagram' && 'news__tab--active'
              }`}
              onClick={() => setActiveTab('instagram')}
            >
              From Instagram
            </button>
          </div>
          <section className="news__feeds">
            <div className={`news__feed`}>
              {activeTab === 'facebook' ? <FacebookFeed /> : <InstagramFeed />}
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default News;
