import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";

import Home from "./pages/home";
import Services from "./pages/services";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
