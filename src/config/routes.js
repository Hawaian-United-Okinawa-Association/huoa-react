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
import Newsletters from 'pages/Newsletters/Newsletters';
import SportsLeagues from 'pages/SportsLeagues/SportsLeagues';
import PerformingArts from 'pages/PerformingArts/PerformingArts';
import Resources from 'pages/Resources/Resources';
import HistoryOfHUOA from 'pages/HistoryOfHUOA/HistoryOfHUOA';
import HawaiiOkinawaCenter from 'pages/HawaiiOkinawaCenter/HawaiiOKinawaCenter';
import HawaiiOkinawaPlaza from 'pages/HawaiiOkinawaPlaza/HawaiiOkinawaPlaza';
import HUOATeam from 'pages/HUOATeam/HUOATeam';
import WatchAndListen from 'pages/WatchAndListen/WatchAndListen';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import KariiThankYou from 'pages/KariiThankYou/KariiThankYou';

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
      <Route exact path="/watch-and-listen">
        <Header props={ pageState["watch-and-listen"] }/>
        <WatchAndListen data={ pageState["watch-and-listen"]} />
      </Route>
      <Route exact path="/events">
        <Header props={ pageState.events } />
        <Events />
      </Route>
      <Route exact path="/calendar">
        <Header props={ pageState["calendar"]} />
        <EventsCalendar data= { pageState["calendar"]}/>
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
      <Route exact path="/latest-news">
        <Header props={ pageState['latest-news'] } />
        <News data={ pageState.home }/>
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
      <Route exact path="/newsletters">
        <Header props={ pageState.newsletters } />
        <Newsletters data={ pageState.newsletters } />
      </Route>
      <Route exact path="/sports-leagues">
        <Header props={pageState['sports-leagues']} />
        <SportsLeagues data={pageState['sports-leagues']} />
      </Route> 
      <Route exact path="/okinawan-cultural-directory">
        <Header props={pageState['okinawan-cultural-directory']} />
        <PerformingArts data={pageState['okinawan-cultural-directory']} />
      </Route>
      <Route exact path="/resources">
        <Header props={pageState.resources} />
        <Resources data={pageState.resources} />
      </Route>
      <Route exact path="/history-of-huoa">
        <Header props={pageState['history-of-huoa']} />
        <HistoryOfHUOA data={pageState['history-of-huoa']} />
      </Route>
      <Route exact path="/hawaii-okinawa-center">
        <Header props={pageState['hawaii-okinawa-center']} />
        <HawaiiOkinawaCenter data={pageState['hawaii-okinawa-center']} />
      </Route>
      <Route exact path="/hawaii-okinawa-plaza">
        <Header props={pageState['hawaii-okinawa-plaza']} />
        <HawaiiOkinawaPlaza data={pageState['hawaii-okinawa-plaza']} />
      </Route> 
      <Route exact path="/huoa-team">
        <Header props={pageState['huoa-team']} />
        <HUOATeam data={pageState['huoa-team']} />
      </Route>
      <Route exact path="/karii-thank-you">
        <KariiThankYou/>
      </Route>
      <Route path="*">
        <PageNotFound/>
      </Route>
    </Switch>
  );
};

export default Routes;
