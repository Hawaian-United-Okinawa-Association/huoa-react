import React from 'react';
import Layout from 'components/Layout/Layout';

const StudentExchange = ({ data }) => {
  if (!data) return null;
  else {
    let { builder } = data;
    return (
      <Layout>
        { builder.map((el) =>
            <div className="studentexchange__container" key={el.title_body.title}>
              <h2 position="left" className="studentexchange__title">
                {el.title_body.title}
              </h2>
              <div className="studentexchange__description" dangerouslySetInnerHTML = {{ __html: el.title_body.body }} />
            </div>
          )}
      </Layout>
    );
  }
};

export default StudentExchange;
