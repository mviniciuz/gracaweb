import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Area from '../pages/Areas';
import Principle from '../pages/Principle';
import Social from '../pages/Social';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/area" component={Area} />
      <Route path="/principle" component={Principle} />
      <Route path="/social" component={Social} />
    </Switch>
  );
}
