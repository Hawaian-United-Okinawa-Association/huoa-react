import React from 'react';

const TitleBody = ({ title, body }) => {
  
    return (
        <React.Fragment>
            <h2 className="title">{title}</h2>
            <div className="body" dangerouslySetInnerHTML = {{ __html: body }} />
        </React.Fragment>
        )
    }

  export default TitleBody;
