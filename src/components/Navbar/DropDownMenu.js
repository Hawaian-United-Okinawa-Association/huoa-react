// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

//Components, assets, actions, styles etc..
import DropDownItem from './DropDownItem';

const DropDownMenu = (props) => {
  const renderMenuItems = (items) => {
    return items.map((item) => {
      return <DropDownItem name={item.name} linkTo={item.linkTo} />;
    });
  };

  console.log(props.items);

  return (
    <div className="dropdown">
      <div className="dropdown-menu" onClick={() => renderMenuItems(props.items)} />
    </div>
  );
};

export default DropDownMenu;
