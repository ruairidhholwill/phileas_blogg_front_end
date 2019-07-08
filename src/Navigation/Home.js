import React, {Fragment} from "react";
import HomeNavBar from "./HomeNavBar"
import UserBox from "../Users/Containers/UserBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReviewBox from "../Reviews/Containers/ReviewBox";


const Home = () =>(
    <Router>
      <header className="home-nav-header">
        <HomeNavBar className="home-nav"/>
      </header>
      <Switch>
        <Route path="/users" component={UserBox}/>
        <Route path ="/reviews" component={ReviewBox}/>
        <Route path="/countries" component={CountryContainer}/>
      </Switch>
    </Router>
  
);
export default Home;
