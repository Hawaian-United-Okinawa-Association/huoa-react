import React from 'react';

import './Layout.scss'

<<<<<<< HEAD
const Layout = ({ children }) => {
  return (
=======
const Layout = ({ noNav, children }) => {
  if (noNav) {
    return (
>>>>>>> bd52511db8f12ab501a05fa6923334fa5382187d
      <div className='layout'>
        <div className='layout__full'>{children}</div>
      </div>
    )
<<<<<<< HEAD
};
=======
  } else {
    return (
      <div className='layout'>
        <div className='layout__sidenav'>Sidebar Component</div>
        <div className='layout__body'>{children}</div>
      </div>
    )
  }
}
>>>>>>> bd52511db8f12ab501a05fa6923334fa5382187d

export default Layout;
