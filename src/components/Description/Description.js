import React from "react";

const Description = ({ parent }) => {
  return (
    <div
      className="description"
      dangerouslySetInnerHTML={{ __html: parent }}
    />
  );
};
export default Description;
