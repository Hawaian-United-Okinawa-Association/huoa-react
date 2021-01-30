import React from "react";

const HeadingTitleImage = ({ rendered, image }) => {
  return (
    <div className="header">
      {!!image && <img className="header__image" src={image} alt="club logo" />}
      <h2 className="header__title">{rendered}</h2>
    </div>
  );
};
export default HeadingTitleImage;
