// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Config
import Header from './header';

// Components
import Home from 'pages/Home/Home';
import Events from 'pages/Events/Events';
import EventsCalendar from 'pages/EventsCalendar/EventsCalendar';
import Event from 'pages/Event/Event';
import News from 'pages/News/News';
import Contact from 'pages/Contact/Contact';
import Donate from 'pages/Donate/Donate';
import Clubs from 'pages/Clubs/Clubs';
import Club from 'pages/Club/Club';
import Scholarships from 'pages/Scholarships/Scholarships';
import Volunteer from 'pages/Volunteer/Volunteer';
import AboutMissionAndPurpose from 'pages/MissionAndPurpose/MissionAndPurpose';
import BanquetFacility from 'pages/BanquetFacility/BanquetFacility';
import StudentExchange from 'pages/StudentExchange/StudentExchange';

const Routes = () => {
  const pageState = useSelector(state => state.pages);
  // TODO: Need to make these dynamic use `state.router`
  
  return (
    <Switch>
      <Route exact path="/">
        <Header props={ pageState.home } />
        <Home data={pageState.home} />
      </Route>
      <Route exact path="/mission-purpose">
        <Header props={ pageState["mission-purpose"] } />
        <AboutMissionAndPurpose data={ pageState["mission-purpose"]}/>
      </Route>
      <Route exact path="/banquet-facility">
        <Header props={ pageState["banquet-facility"]}/>
        <BanquetFacility data={ pageState["banquet-facility"]}/>
      </Route>
      <Route exact path="/events">
        <Header props={ pageState.events } />
        <Events />
      </Route>
      <Route exact path="/events-calendar">
        <Header props={ pageState["events-calendar"]} />
        <EventsCalendar />
      </Route>
      <Route path="/events/:eventId">
        <Header props={ pageState.events } />
        <Event />
      </Route>
      <Route exact path="/clubs">
        <Header props={ pageState["clubs"]}/>
        <Clubs data={ pageState["clubs"] } />
      </Route>
      <Route path="/clubs/:clubId">
        <Header props={ pageState.join } />
        <Club />
      </Route>
      <Route exact path="/scholarships">
        <Header props={ pageState.scholarships}/>
        <Scholarships data={ pageState.scholarships } />
      </Route>
      <Route exact path="/volunteer">
        <Header props={ pageState.volunteer}/>
        <Volunteer data={ pageState.volunteer } />
      </Route>
      <Route exact path="/news">
        <Header props={ pageState.news } />
        <News />
      </Route>
      <Route exact path="/contact">
        <Header props={ pageState.contact } />
        <Contact data={pageState.contact} />
      </Route>
      <Route exact path="/donate">
        <Header props={ pageState.donate } />
        <Donate data={pageState.donate} />
      </Route>
      <Route exact path="/home">
        <Redirect to="/"/>
      </Route>
      <Route exact path="/student-exchange">
        <Header data={ pageState["student-exchange"] } />
        <StudentExchange data={ pageState["student-exchange"] } />
      </Route>
    </Switch>
  );
};

export default Routes;
