//Dependencies
import React from 'react';
import { useDispatch } from 'react-redux';

//Components
import Modal from './../components/Modal/Modal';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

import { getPages } from './../actions/index';
import { getClubs } from 'actions/ClubActions';

import './App.scss';

const App = (props) => {
  const dispatch = useDispatch();
  dispatch(getPages());
  dispatch(getClubs());
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
