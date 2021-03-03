import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
import Header from "./components/UI/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="h-full">
      <Header className="display-block"></Header>
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
