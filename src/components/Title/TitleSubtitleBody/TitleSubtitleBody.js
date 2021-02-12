import React from 'react';

function TitleSubtitleBody({ title, subtitle, body }) {
  return (
    <div className="title-subtitle-body">
      <h2 className="title-subtitle-body__title">{title}</h2>
      <p className="title-subtitle-body__subtitle p1">{subtitle}</p>
      <div className="title-subtitle-body__body" dangerouslySetInnerHTML = {{__html: body}}/>
    </div>
  );
} 

export default TitleSubtitleBody;
