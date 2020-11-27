import React from 'react';

const Layout = ({ noNav, children }) => {
  if (noNav) {
    return (
      <div className='layout'>
        <div className='layout__full'>{children}</div>
      </div>
    )
  } else {
    return (
      <div className='layout'>
        <div className='layout__sidenav'>Sidebar Component</div>
        <div className='layout__body'>{children}</div>
      </div>
    )
  }
}

export default Layout;
