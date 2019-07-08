import React, {Component, Fragment} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import UserBox from "../Users/Containers/UserBox"
import ReviewListBox from "../Reviews/Containers/ReviewListBox"
import ReviewFormBox from "../Reviews/Containers/ReviewFormBox"
import CountryContainer from "../Countries/Containers/CountryContainer"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EditAndDeleteReview from "../Reviews/Components/EditAndDeleteReview"

class Main extends Component{

  render(){
    return(<Router>
        <Fragment>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/users" component={UserBox}/>
              <Route path="/countries" component={CountryContainer}/>
              <Route path="/reviews" component={ReviewListBox}/>
              <Route path="/add-review" component={ReviewFormBox}/>
              <Route path="/review" component={EditAndDeleteReview}/>
          </Switch>
        </Fragment>
    </Router>
  )
  }
}

export default Main;
