//Dependencies
import React from 'react';

//Components
import Modal from 'components/Modal/Modal';
import Navbar from 'components/Navbar/Navbar';
import NavMobile from 'components/NavMobile/NavMobile';
import Footer from 'components/Footer/Footer';
import Routes from 'config/routes';

import { Init } from './Init';

const App = () => {
  Init();
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
