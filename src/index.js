import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import Events from './components/events.js'
import Workshops from './components/workshops.js'
import Team from './components/team.js'
import Gallery from './components/gallery.js';
import Tronicals from './components/tronicals.js';
import Certificate from './components/certificate.js';
import Sr from './components/sr.js';
import About from './components/about.js';
import Contact from './components/contact.js';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/events" exact component={Events} />
    <Route path="/workshops" exact component={Workshops} />
    <Route path="/team" exact component={Team} />
    <Route path="/gallery" exact component={Gallery} />
    <Route path="/tronicals" exact component={Tronicals}/>
    <Route path="/certificate" exact component={Certificate} />
    <Route path="/sr" exact component={Sr} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Redirect from="*" to="/" />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

