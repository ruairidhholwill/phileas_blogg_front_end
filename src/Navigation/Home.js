import React from "react";
import HomeNavBar from "./HomeNavBar"
import UserBox from "../Users/Containers/UserBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReviewListBox from "../Reviews/Containers/ReviewListBox";


const Home = () =>(
  <div>
    <Router>
     <HomeNavBar className="home-nav"/>
          <Switch>
            <Route path="/users" component={UserBox}/>
            <Route path ="/reviews" component={ReviewListBox}/>
            <Route path="/countries" component={CountryContainer}/>
           </Switch>
    </Router>
  </div>
);
export default Home;
