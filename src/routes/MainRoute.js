import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../components/Home";
import ViewLostDog from "../components/ViewLostDog";
import ViewFoundDog from "../components/ViewFoundDog";
import Donation from "../components/Donation";
import About from "../components/About";
import AddLostDog from "../components/ViewLostDog/AddLostDog/FirstStep";
import FirstStep from "../components/ViewLostDog/AddLostDog/FirstStep";
import SecondStep from "../components/ViewLostDog/AddLostDog/SecondStep";
import ThirdStep from "../components/ViewLostDog/AddLostDog/ThirdStep";
import AddFoundDog from '../components/ViewFoundDog/AddFoundDog'
import Blog1 from "../components/Blog/Blog1";

class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/viewlostdog" component={withRouter(ViewLostDog)} />
        <Route exact path="/addlostdog" component={withRouter(AddLostDog)} />
        <Route path="/viewfounddog" component={withRouter(ViewFoundDog)} />
        <Route exact path="/donation" component={Donation} />
        <Route exact path="/about" component={About} />
        <Route exact path="/addlostdog" component={FirstStep} />
        <Route path="/addlostdog/2" component={SecondStep} />
        <Route path="/addlostdog/3" component={ThirdStep} />
        <Route path="/addfounddog" component={AddFoundDog} />
        <Route exact path="/blog1" component={Blog1} />
      </Switch>
    );
  }
}

export default MainRoute;
