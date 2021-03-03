import React from 'react';

const TitleBody = ({ title, body }) => { 
  return (
    <>
      <h2 className="title-body__title">{title}</h2>
      <div className="title-body__body" dangerouslySetInnerHTML = {{ __html: body }} />
    </>
  )
}

export default TitleBody;
