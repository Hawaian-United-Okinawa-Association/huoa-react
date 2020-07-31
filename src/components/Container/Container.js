import React, { Component } from 'react';

import './Container.scss';

// TODO 1. refactor this as a functional expression with react hooks.

// TODO 2. See if there's a way to turn off columns, if needed.
// Can we pass a property that dictates how many columns a div takes up?

const Container = props => {
  return (
    <div className={'container ' + (this.props.grid || '')}>
      {this.props.children}
    </div>
  );
};

// WORKING CODE
// class Container extends Component {
//   render() {
//     return (
//       <div className={'container ' + (this.props.grid || '')}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default Container;
