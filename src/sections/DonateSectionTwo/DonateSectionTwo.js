import React from "react";

import { ReactComponent as Donate } from "assets/donate.svg";
import { ReactComponent as Paypal } from "assets/paypal.svg";
import { ReactComponent as Car } from "assets/car-2.svg";

const DonateSectionTwo = ({ data }) => {
  const columnArray = Object.keys(data.body).map((i) => data.body[i]);
  const cols = columnArray.map((col, i) => {
    const icons = {
      "tree-planting": <Donate className="donate-section-two__icon" />,
      "coin-in-hand": <Paypal className="donate-section-two__icon" />,
      car: <Car className="donate-section-two__icon" />,
    };

    return (
      <div className="donate-section-two__col" key={i}>
        <div className="donate-section-two__icon-bg">{icons[col.icon]}</div>
        <h4 className="donate-section-two__subtitle">{col.subtitle}</h4>
        <div
          className="donate-section-two__text"
          dangerouslySetInnerHTML={{ __html: col.text }}
        />
      </div>
    );
  });

  return (
    <div className="donate-section-two">
      <h2 className="donate-section-two__title">{data.title}</h2>
      <div className="donate-section-two__body">{cols}</div>
    </div>
  );
};

export default DonateSectionTwo;
