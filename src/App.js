import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "pages/about.js";
import Home from "pages/home.js";
import TanahMerah from "pages/TanahMerah.js";
import Inhil from "pages/Inhil.js";
import Riau from "pages/Riau.js";
import Indonesia from "pages/Indonesia.js";
import Dunia from "pages/Dunia.js";


import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/data/tanahmerah" component={TanahMerah} />
        <Route path="/data/inhil" component={Inhil} />
        <Route path="/data/riau" component={Riau} />
        <Route path="/data/indonesia" component={Indonesia} />
        <Route path="/data/dunia" component={Dunia} />
      </Switch>
    </Router>
  );
}

export default memo(App);
