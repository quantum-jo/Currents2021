import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import Events from './components/events.js'
import Workshops from './components/workshops.js'
import Team from './components/team.js'
import Gallery from './components/gallery.js';
import Tronicals from './components/tronicals.js';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/events" exact component={Events} />
    <Route path="/workshops" exact component={Workshops} />
    <Route path="/team" exact component={Team} />
    <Route path="/gallery" exact component={Gallery} />
    <Route path="/tronicals" exact component={Tronicals}/>

    <Redirect from="*" to="/" />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
