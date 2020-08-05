//Dependencies
import React from 'react';
import { connect } from 'react-redux';

//Components
import Modal from './../components/Modal/Modal';
import Navbar from './../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import Container from './../components/Container/Container';
// import Column from './../components/Container/Column/Column';
// import Row from './../components/Container/Row/Row';
// import Contents from '../components/Container/Contents3Items';
import Routes from './../config/routes';

import { fetchEvents } from './../actions/index';

import './App.scss';
import Contents3Items from 'components/Container/Contents3Items';
import Contents4Items from 'components/Container/Contents4Items';
import Contents4ItemsImage from 'components/Container/Contents4ItemsImage';

//TODO remove container and contents before making a pull request into main.

const App = props => {
  return (
    <main>
      <Modal />
      <Navbar />
      <Routes />
      <Footer />
      <Container layout='cols-3'>
        <Contents3Items></Contents3Items>
      </Container>
      <Container layout='cols-4'>
        <Contents4Items></Contents4Items>
      </Container>
      <Container layout='cols-4-image'>
        <Contents4ItemsImage></Contents4ItemsImage>
      </Container>
    </main>
  );
};

export default connect(null, { fetchEvents })(App);
