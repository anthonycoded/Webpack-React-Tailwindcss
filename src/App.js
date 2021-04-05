import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
import Admin from "./components/Admin";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer"
import LandingPage from "./components/LandingPage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";


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
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
