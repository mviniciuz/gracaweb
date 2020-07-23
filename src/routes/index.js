import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/Dashboard/SignIn';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Dashboard/Users';
import Contacts from '../pages/Dashboard/Contacts';
import Tags from '../pages/Dashboard/Tags';
import Mails from '../pages/Dashboard/Mails';
import News from '../pages/Dashboard/News';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Team from '../pages/Team';
import Area from '../pages/Areas';
import Principle from '../pages/Principle';
import Social from '../pages/Social';
import Informatives from '../pages/Informatives';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/team" component={Team} />
      <Route path="/area" component={Area} />
      <Route path="/principle" component={Principle} />
      <Route path="/info" component={Informatives} />
      <Route path="/social" component={Social} />

      <Route path="/signin" component={SignIn} isSignin />

      <Route path="/dashboard" component={Dashboard} isPrivate isDash />
      <Route path="/users" component={Users} isPrivate isDash />
      <Route path="/contacts" component={Contacts} isPrivate isDash />
      <Route path="/tags" component={Tags} isPrivate isDash />
      <Route path="/mail" component={Mails} isPrivate isDash />
      <Route path="/news" component={News} isPrivate isDash />
    </Switch>
  );
}
