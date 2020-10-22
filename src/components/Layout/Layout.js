import React from 'react';

import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__sidenav">Sidebar Component</div>
      <div className="layout__body">{ children }</div>
    </div>
  )
};

export default Layout;
