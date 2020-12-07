//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

//Components
import Modal from 'components/Modal/Modal';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Routes from 'config/routes';

import { getHeros, getPages, getNav } from 'actions/index';

const App = () => {
  const dispatch = useDispatch();

  dispatch(getHeros());
  dispatch(getPages());
  dispatch(getNav());

  return (
    <main>
      <Modal />
      <Navbar />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
