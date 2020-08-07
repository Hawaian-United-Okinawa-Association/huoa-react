import React from 'react';

import './Container.scss';

const Container = props => {
  if (props.layout) {
    return <div className={'container ' + props.layout}>{props.children}</div>;
  }
  return <div className={'container'}>{props.children}</div>;
};

export default Container;
