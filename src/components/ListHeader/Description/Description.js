import React from "react";

const Description = ({ data }) => {

  if (!data) return null;
  else {
    return (
        <div
          className="titleBody__description"
          dangerouslySetInnerHTML={{ __html: body }}
        />
    );
  }
  export default Description;
}
