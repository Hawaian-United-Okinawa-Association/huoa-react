//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

//Components
import Modal from './../components/Modal/Modal';
import Navbar from './../components/Navbar/Navbar';
import NavMobile from './../components/NavMobile/NavMobile';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

import { getPages } from './../actions/index';

import './App.scss';

const App = (props) => {
  const dispatch = useDispatch();
  dispatch(getPages());

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
