import React, { Component } from 'react';

import './Container.scss';

// Can we pass a property that dictates how many columns a div takes up?

// React Bootstrap shows examples of determining if the children is a col, or a row. In {props.children} could find out if it's a col or row.

// I could make this declarative within the JSX, instead of relying on styling it in CSS.

// TODO current problem, the container is handling grid, but it passes the children into the first grid of the container.

// TODO the amount of columns should be declarative, when writing

const Container = props => {
  return (
    <div className={'container' + (props.layout ? ' ' + props.layout : '')}>
      {props.children}
    </div>
  );
};

export default Container;
