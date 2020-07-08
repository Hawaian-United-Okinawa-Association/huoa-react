//Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import Modal from './../components/Modal/Modal';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Routes from './../config/routes';

import { fetchEvents } from './../actions/index';

import './App.scss';

const App = (props) => {
  return (
    <main>
      <Modal />
      <Navbar />
      <Routes />
      <Footer />
    </main>
  );
};

export default connect(null, { fetchEvents })(App);
