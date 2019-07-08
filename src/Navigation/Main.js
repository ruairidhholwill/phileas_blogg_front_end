import React, {Component, Fragment} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import './Main.css'
import ReviewBox from "../Reviews/Containers/ReviewBox"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{

  render(){
    return(<Router>
        <main className="layout">
         <a href="/"><img id="logo" src="/images/balloon.png" path="/" component={Home}/></a>
          <NavBar className="main-nav"/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/add-review" component={ReviewBox}/>
            </Switch>
        </main>
    </Router>
  )
  }
}

export default Main;
