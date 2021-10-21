import React from 'react';
import Layout from 'components/Layout/Layout';

const StudentExchange = ({ data }) => {
  if (!data) return null;
  else {
    const { title, body } = data.student_exchange_page;
    return (
      <Layout>
        <div className="studentexchange__container">
          <h2 position="left" className="studentexchange__title">{title}</h2>
          <div className="studentexchange__description" dangerouslySetInnerHTML={{__html: body}} />
        </div>
      </Layout>
    );
  }
};

export default StudentExchange;
