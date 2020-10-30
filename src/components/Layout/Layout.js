import React from 'react'

import './Layout.scss'

const Layout = ({ sideNav, children }) => {
  if (sideNav) {
    return (
      <div className='layout'>
        <div className='layout__sidenav'>Sidebar Component</div>
        <div className='layout__body'>{children}</div>
      </div>
    )
  } else {
    return (
      <div className='layout'>
        <div className='layout__full'>{children}</div>
      </div>
    )
  }
}

export default Layout;
