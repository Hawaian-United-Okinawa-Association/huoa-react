import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';

const HistoryOfHUOA = ({ data }) => {
  if (!data) return null;
  return (
    <Layout>
      <Container>
        <div className="history-of-huoa">
          <h2>{data.builder[0].title_body.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.builder[0].title_body.body,
            }}
          />
          <h4>{data.builder[1].title_body.title}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: data.builder[1].title_body.body,
            }}
          />
          {data.builder[2].image_banner.images.map((image, i) => (
            <div className="history-of-huoa__image">
              <img src={image.url} alt="" key={i} />
              <strong>{image.title}</strong>
              <p>{image.caption}</p>
            </div>
          ))}
          {data.builder[3].image_banner.images.map((image, i) => (
            <div className="history-of-huoa__image">
              <img src={image.url} alt="" key={i} />
              <strong>{image.title}</strong>
            </div>
          ))}
          <div
            dangerouslySetInnerHTML={{
              __html: data.builder[4].title_body.body,
            }}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default HistoryOfHUOA;
