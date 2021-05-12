//Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

//Components
import Modal from 'components/Modal/Modal';
import Navbar from 'components/Navbar/Navbar';
import NavMobile from 'components/NavMobile/NavMobile';
import Footer from 'components/Footer/Footer';
import Routes from 'config/routes';

import { Init } from './Init';

const App = () => {
  Init();
  const scroll = useSelector(state => state.scroll);
  document.body.style.overflow = scroll ? 'scroll' : 'hidden';
  
  return (
    <main>
      <Modal />
      <Navbar />
      <NavMobile />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
