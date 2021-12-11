import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "./store/store";
import "./app.css";
import Admin from "./components/Admin";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ScrollIntoView from "./components/UI/ScrollIntoView";

const App = () => {
  return (
    <Router>
      <Provider store={store}></Provider>
      <Header className="display-block"></Header>
      <ScrollIntoView>
        <Switch>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </ScrollIntoView>
      <Footer></Footer>
    </Router>
  );
};

export default App;
