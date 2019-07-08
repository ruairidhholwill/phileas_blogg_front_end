import React, {Component, Fragment} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import './Main.css'
import ReviewBox from "../Reviews/Containers/ReviewBox"
import UserForm from "../Users/Components/UserForm"
import UserBox from "../Users/Containers/UserBox"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props)


    this.postData = this.postData.bind(this);
  }

  postData(data) {
    return fetch('http://localhost:8080/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(reviewData => this.setState(prevState => {
        return {reviews: [...prevState.reviews, reviewData]}
      }))
      
  }
  
  
  render(){
    return(<Router>
        <main className="layout">
        <header>
         <a href="/"><img id="logo" src="/images/balloon.png" path="/" component={Home}/></a>
          <NavBar className="main-nav"/>
        </header>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/add-user" render={props => <UserForm onFormSubmit = {this.postData}/>}/>
                <Route path="/add-user" component={UserForm}/>
                <Route path="/add-review" component={ReviewBox}/>
            </Switch>
        </main>
    </Router>
  )
  }
}

export default Main;
