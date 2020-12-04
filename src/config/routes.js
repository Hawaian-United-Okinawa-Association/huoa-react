// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Config
import Header from './header';

// Components
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Events from 'pages/Events/Events';
import News from 'pages/News/News';
import Contact from 'pages/Contact/Contact';
import Donate from 'pages/Donate/Donate';
import Geneology from 'pages/Geneology/Geneology';
import GetInvolved from 'pages/GetInvolved/GetInvolved';
import Demo from 'pages/Demo/Demo';

const Routes = () => {
  const pageState = useSelector(state => state.pages);
  
  return (
    <Switch>
      <Route exact path="/">
        <Header props={ pageState.home } />
        <Home data={pageState.home} />
      </Route>
      <Route path="/about">
        <Header props={ pageState.about } />
        <About />
      </Route>
      <Route exact path="/events">
        <Header props={ pageState.events } />
        <Events />
      </Route>
      <Route path="/join">
        <Header props={ pageState.join } />
        <GetInvolved data={ pageState["join-a-club"] }/>
      </Route>
      <Route path="/news">
        <Header props={ pageState.news } />
        <News />
      </Route>
      <Route path="/contact">
        <Header props={ pageState.contact } />
        <Contact data={pageState.contact} />
      </Route>
      <Route path="/donate">
        <Header props={ pageState.donate } />
        <Donate data={pageState.donate} />
      </Route>
      <Route path="/ogsh">
        <Header props={ pageState.ogsh } />
        <Geneology />
      </Route>
      <Route path="/demo">
        <Header props={ pageState.demo } />
        <Demo />
      </Route>
    </Switch>
  );
};

export default Routes;
