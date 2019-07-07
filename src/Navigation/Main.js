import React, {Component, Fragment} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import UserBox from "../Users/Containers/UserBox"
import ReviewBox from "../Reviews/Containers/ReviewBox"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<Router>
        <Fragment>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/users" component={UserBox}/>
              <Route path="/add-review" component={ReviewBox}/>
          </Switch>
        </Fragment>
    </Router>
  )
  }
}

export default Main;
