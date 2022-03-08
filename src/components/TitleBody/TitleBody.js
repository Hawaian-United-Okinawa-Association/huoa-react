import React from 'react';

const TitleBody = ({ props }) => {
  const { title, body } = props.title_body;

  return (
    <div className="title-body">
      <h2 className="title-body__title">{title}</h2>
      <div className="title-body__body" dangerouslySetInnerHTML={{__html: body}}/>
    </div>
  );
} 

export default TitleBody;
