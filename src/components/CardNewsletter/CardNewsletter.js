import React from 'react';

import { ReactComponent as Icon } from '../../assets/file-text.svg';
const CardNewsletter = ({ props }) => {
  const { title, body, buttons } = props;

  return (
    <div className="card-newsletter">
      <div className="card-newsletter__text">
        <h3 className="card-newsletter__title">{title}</h3>
        <p className="card-newsletter__body">{body}</p>
      </div>
      <div className="card-newsletter__button-container">
        <a
          className="card-newsletter__link"
          target="_blank"
          rel="noopener noreferrer"
          href={buttons[0].link}
        >
          <Icon />
          {buttons[0].text}
        </a>
        <a
          className="card-newsletter__link"
          target="_blank"
          rel="noopener noreferrer"
          href={buttons[1].link}
        >
          <Icon />
          {buttons[1].text}
        </a>
      </div>
    </div>
  );
};

export default CardNewsletter;
