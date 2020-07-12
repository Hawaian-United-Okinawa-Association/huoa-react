// Dependencies
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

//Components, assets, actions, styles etc..
import DropDownItem from './DropDownItem';
import { setActiveMenu } from '../../actions/index';

const DropDownMenu = (props) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const renderMenuItems = (items) => {
    return items.map((item) => {
      return <DropDownItem name={item.name} linkTo={item.linkTo} />;
    });
  };

  return (
    <div className="nav--dropdown" ref={dropdownRef} onMouseLeave={() => dispatch(setActiveMenu(null))}>
      <div className="nav--dropdown__links">{renderMenuItems(props.items)}</div>
    </div>
  );
};

export default DropDownMenu;
