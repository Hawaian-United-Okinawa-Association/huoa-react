// Dependencies
import React, { useRef } from 'react';

//Components, assets, actions, styles etc..
import DropDownItem from './DropDownItem';

const DropDownMenu = (props) => {
  const dropdownRef = useRef(null);

  const renderMenuItems = (items) => {
    return items.map((item) => {
      return <DropDownItem name={item.name} linkTo={item.linkTo} />;
    });
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-menu">{renderMenuItems(props.items)}</div>
    </div>
  );
};

export default DropDownMenu;
