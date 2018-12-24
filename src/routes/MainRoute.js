import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import ViewLostDog from "../components/ViewLostDog";
import ViewFoundDog from "../components/ViewFoundDog";
import Donation from "../components/Donation";
import About from "../components/About";

class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/viewlostdog" component={ViewLostDog} />
        <Route path="/viewfounddog" component={ViewFoundDog} />
        <Route exact path="/donation" component={Donation} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default MainRoute;
