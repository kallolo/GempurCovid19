import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "pages/about.js";
import Home from "pages/home.js";
import TanahMerah from "pages/TanahMerah.js";
import Inhil from "pages/Inhil.js";
import Riau from "pages/Riau.js";
import Indonesia from "pages/Indonesia.js";
import Dunia from "pages/Dunia.js";
import withPageView from "withPageView";


import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withPageView(Home)} />
        <Route path="/about" component={withPageView(About)} />
        <Route path="/data/tanahmerah" component={withPageView(TanahMerah)} />
        <Route path="/data/inhil" component={withPageView(Inhil)} />
        <Route path="/data/riau" component={withPageView(Riau)} />
        <Route path="/data/indonesia" component={withPageView(Indonesia)} />
        <Route path="/data/dunia" component={withPageView(Dunia)} />
      </Switch>
    </Router>
  );
}

export default memo(App);
