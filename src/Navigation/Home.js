import React from "react";
import HomeNavBar from "./HomeNavBar"
import UserBox from "../Users/Containers/UserBox"
import ReviewBox from "../Reviews/Containers/ReviewBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Home = () =>(
  <div>
    <Router>
     <HomeNavBar className="home-nav"/>
          <Switch>
            <Route path="/users" component={UserBox}/>
            <Route path="/countries" component={CountryContainer}/>
           </Switch>
    </Router>
  </div>
);
export default Home;
