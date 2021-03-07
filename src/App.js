import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
import Admin from "./components/Admin";
import Header from "./components/UI/Header";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="h-full">
      <Router>
        <Header className="display-block"></Header>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/admin" exact component={Admin}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
