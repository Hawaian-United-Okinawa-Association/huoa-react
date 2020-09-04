//Dependencies
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Config
import Header from 'config/header';

//Components
const Home = lazy(() => import('pages/Home/Home'));
const About = lazy(() => import('pages/About/About'));
const Events = lazy(() => import('pages/Events/Events'));
const GetInvolved = lazy(() => import('pages/GetInvolved/GetInvolved'));
const News = lazy(() => import('pages/News/News'));
const Contact = lazy(() => import('pages/Contact/Contact'));
const Donate = lazy(() => import('pages/Donate/Donate'));
const Geneology = lazy(() => import('pages/Geneology/Geneology'));
const Demo = lazy(() => import('pages/Demo/Demo'));

const Routes = () => {
  const pageState = useSelector(state => state.pages);

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/">
          <Header props={ pageState.home } />
          <Home data={pageState.home} />
        </Route>
        <Route path="/about">
          <Header props={ pageState.about } />
          <About />
        </Route>
        <Route path="/events">
          <Header props={ pageState.events } />
          <Events />
        </Route>
        <Route path="/join">
          <Header props={ pageState.join } />
          <GetInvolved />
        </Route>
        <Route path="/news">
          <Header props={ pageState.news } />
          <News />
        </Route>
        <Route path="/contact">
          <Header props={ pageState.contact } />
          <Contact />
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
    </Suspense>
  );
};

export default Routes;
