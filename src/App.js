import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header";

import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact-us";
import About from "./pages/about";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/inicio">
            <Home />
          </Route>
          <Route path="/quien-soy">
            <About />
          </Route>
          <Route path="/servicios">
            <Services />
          </Route>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
