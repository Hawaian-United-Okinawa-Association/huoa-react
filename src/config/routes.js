//Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';
import Donate from '../pages/Donate/Donate';
import Geneology from '../pages/Geneology/Geneology';
import GetInvolved from '../pages/GetInvolved/GetInvolved';

const Routes = () => {
  const pageState = useSelector(state => state.pages);

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} data={pageState.home} />} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/join" component={GetInvolved} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" render={(props) => <Donate {...props} data={pageState.donate} /> } />
      <Route path="/ogsh" component={Geneology} />
    </Switch>
  );
};

export default Routes;
