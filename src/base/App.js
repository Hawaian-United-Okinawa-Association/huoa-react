//Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import Modal from './../components/Modal/Modal';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Container from './../components/Container/Container';
import Contents from './../components/Container/Contents';
import Routes from './../config/routes';

import { fetchEvents } from './../actions/index';

import './App.scss';

//TODO remove container and contents before making a pull request into main.

const App = props => {
  return (
    <main>
      <Modal />
      <Navbar />
      <Routes />
      <Footer />
      <Container grid='row'>
        <Contents></Contents>
      </Container>
    </main>
  );
};

export default connect(null, { fetchEvents })(App);
