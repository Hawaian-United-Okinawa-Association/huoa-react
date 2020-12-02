//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

//Components
import Modal from 'components/Modal/Modal';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import Routes from 'config/routes';

import { getHeros, getPages, getEvents } from 'actions/index';

const App = () => {
  const dispatch = useDispatch();

  dispatch(getPages());
  dispatch(getEvents());
  dispatch(getHeros());

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
