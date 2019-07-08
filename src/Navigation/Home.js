import React from "react";
import HomeNavBar from "./HomeNavBar"
import UserBox from "../Users/Containers/UserBox"
import ReviewBox from "../Reviews/Containers/ReviewBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const Home = () =>(
  <div>
     <HomeNavBar className="home-nav"/>
          <Switch>
            <Route path="/users" component={UserBox}/>
            <Route path="/countries" component={CountryContainer}/>
           </Switch>
  <h4>Home</h4>
  <p>Welcome in our Phileas blog app</p>
  </div>
);
export default Home;
