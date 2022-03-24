import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import { ReactComponent as External } from '../../assets/external-link.svg';

function Resources({ data }) {
  if (!data) return null;
  const header = data.builder[0];
  const {links} = data;
  return (
    <Layout>
      <Container>
        <h2>{header.title_body.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: header.title_body.body }} />
        <div className="resources">
          {links.map((link, i) => {
            const { title, body, type, url } = link;
            const isExternal = type === 'external' ? true : false;
            return (
              <a
                key={i}
                className="resources__link"
                target="_blank"
                rel="noopener noreferrer"
                href={url}
              >
                <strong>{title}</strong>
                <div className="resources__description">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: body,
                    }}
                  />
                </div>
                {isExternal && <External className="resources__external" />}
              </a>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export default Resources;
