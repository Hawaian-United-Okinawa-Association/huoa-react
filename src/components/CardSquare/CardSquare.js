import React from 'react';

const CardSquare = ({ props }) => {
  const { title, subtitle, body, button, Icon } = props;

  return (
    <div className="card-square">
      <div className="card-square__text">
        <Icon />
        <h1 className="card-square__title">{title}</h1>
        <h3 className="card-square__subtitle">{subtitle}</h3>
        <p className="card-square__body">{body}</p>
      </div>
      <div className="card-square__button">
        <a href={button.link} rel="noopener noreferrer" target="_blank">
          {button.text}
          {' >'}
        </a>
      </div>
    </div>
  );
};

export default CardSquare;
