import React from 'react';

const TitleBody = ({ title, body }) => {
  
    return (
        <>
            <h2 className="title">{title}</h2>
            <div className="body" dangerouslySetInnerHTML = {{ __html: body }} />
        </>
        )
    }

  export default TitleBody;
