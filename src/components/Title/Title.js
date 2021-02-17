import React from "react";

const Title = ({ rendered, position }) => {
  return (
      <div className={`title__${position}`}>
        <h2>{rendered}</h2>
      </div>
  );
}
export default Title;
