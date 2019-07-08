import React, {Component, Fragment} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import './Main.css'
import UserBox from "../Users/Containers/UserBox"
import ReviewBox from "../Reviews/Containers/ReviewBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{

  render(){
    return(<Router>
        <main className="layout">
          <img id="logo" src="/images/balloon.png"></img>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/users" component={UserBox}/>
              <Route path="/countries" component={CountryContainer}/>
              <Route path="/add-review" component={ReviewBox}/>
          </Switch>
        </main>
    </Router>
  )
  }
}

export default Main;
