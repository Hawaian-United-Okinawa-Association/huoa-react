import React from 'react';
import Layout from 'components/Layout/Layout';
import Container from 'components/Container/Container';
import { ReactComponent as External } from '../../assets/external-link.svg';

function Resources({ data }) {
  if (!data) return null;
  const [first, ...resources] = data.builder;
  return (
    <Layout>
      <Container>
        <h2>{first.title_body.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: first.title_body.body }} />
        <div className="resources">
          {resources.map((el, i) => {
            const { title, body, button } = el.title_body_button;
            const isExternal = button.link.startsWith('http') ? true : false;
            return (
              <a
                key={i}
                className="resources__resource"
                target="_blank"
                rel="noopener noreferrer"
                href={`${button.link}`}
              >
                <strong>{title}</strong>
                <div className="resources__link">
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
