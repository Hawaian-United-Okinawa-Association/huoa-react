// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Config
import Header from './header';

// Components
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import Event from 'pages/Event/Event';
import News from 'pages/News/News';
import Contact from 'pages/Contact/Contact';
import Donate from 'pages/Donate/Donate';
import Geneology from 'pages/Geneology/Geneology';
import GetInvolved from 'pages/GetInvolved/GetInvolved';
import Club from 'pages/GetInvolved/Club'
import MissionAndPurpose from 'pages/MissionAndPurpose/MissionAndPurpose';
import BanquetFacility from 'pages/BanquetFacility/BanquetFacility';

const Routes = () => {
  const pageState = useSelector(state => state.pages);

  // TODO: Need to make these dynamic use `state.router`

  return (
    <Switch>
      <Route exact path="/">
        <Header props={ pageState.home } />
        <Home data={pageState.home} />
      </Route>
      <Route path="/mission-purpose">
        {/* <Header props={ pageState["mission-purpose"] } /> */}
        <MissionAndPurpose data={ pageState["mission-purpose"]}/>
      </Route>
      <Route path="/banquet-facility">
        {/* <Header props={ pageState["banquet-facility"]}/> */}
        <BanquetFacility data={ pageState["banquet-facility"]}/>
      </Route>
      <Route exact path="/events">
        <Header props={ pageState.events } />
        <Events />
      </Route>
      <Route path="/events/:eventId">
        <Header props={ pageState.events } />
        <Event />
      </Route>
      <Route exact path="/join-a-club">
        <Header props={ pageState.join } />
        <GetInvolved data={ pageState["join-a-club"] }/>
      </Route>
      <Route path="/clubs/:clubId">
        <Header props={ pageState.join } />
        <Club />
      </Route>
      <Route path="/news">
        <Header props={ pageState.news } />
        <News />
      </Route>
      <Route path="/contact">
        <Header props={ pageState.contact } />
        <Contact data={ pageState.contact } />
      </Route>
      <Route path="/donate">
        <Header props={ pageState.donate } />
        <Donate data={pageState.donate} />
      </Route>
      <Route path="/ogsh">
        <Header props={ pageState.ogsh } />
        <Geneology />
      </Route>
    </Switch>
  );
};

export default Routes;
