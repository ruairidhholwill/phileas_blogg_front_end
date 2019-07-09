import React, {Component} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import './Main.css'
import UserForm from "../Users/Components/UserForm"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReviewForm from "../Reviews/Components/ReviewForm";
import IndividualReviewBox from "../Reviews/Containers/IndividualReviewBox"
import ErrorPage from './ErrorPage'


class Main extends Component{
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      reviews: [],
      topUser: [],
      countries: [],
      reviewedCountries: []
    }

    this.postUserData = this.postUserData.bind(this);
    this.postReviewData = this.postReviewData.bind(this);
  }

  componentDidMount() {
    let allUsersURL = "http://localhost:8080/users"
    fetch(allUsersURL)
      .then(res => res.json())
      .then(userData => this.setState({ users: userData._embedded.users }))
      .catch(err => console.err)

    let topUsersURL = "http://localhost:8080/users/ranking"
    fetch(topUsersURL)
    .then(res => res.json())
    .then(topUserData => this.setState({ topUsers: topUserData }))
    .catch(err => console.err)

    let reviewedCountriesUrl = 'http://localhost:8080/countries'
      fetch(reviewedCountriesUrl)
        .then(res => res.json())
        .then(reviewedCountry => this.setState({ reviewedCountries: reviewedCountry._embedded.countries }))
        .catch(err => console.error)

    let countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name'
      fetch(countriesUrl)
        .then(res => res.json())
        .then(countries => this.setState({ countries: countries }))
        .catch(err => console.error)
    
  }

  postUserData(data) {
    return fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(userData => this.setState(prevState => {
        return {users: [...prevState.users, userData]}
      }))
  }


  postReviewData(data) {
    const countries = this.state.reviewedCountries.map(country => country.name)
    console.log("Logging data", data);
    
    if (countries.includes(data.country) === false) {

      fetch('http://localhost:8080/countries', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.country)
      })
        .then(res => res.json())
        .then(reviewedCountry => this.setState(prevState => {
          return { reviewedCountries: [...prevState.reviewedCountries, reviewedCountry] }
        }))
    }

    fetch('http://localhost:8080/reviews', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(reviewData => this.setState(prevState => {
          return { reviews: [...prevState.reviews, reviewData] }
        }))
  }
  

  render(){
    return(
      <Router>
          <main className="layout">
          <header>
          <a href="/"><img alt="balloon" id="logo" src="/images/balloon.png" path="/"/></a>
            <NavBar className="main-nav"/>
          </header>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/add-user" render={() => <UserForm onFormSubmit = {this.postUserData}/>}/>
                  <Route path="/add-user" component={UserForm}/>
                  <Route path="/add-review" render={() => <ReviewForm users = {this.state.users} countries = {this.state.countries} onReviewSubmit = {this.postReviewData}/>}/>
                  {/* NEED TO PASS IN ID!! */}
                  {/* <Route path={"/review/" + this.state.reviews.id}  component={IndividualReviewBox} /> */}
                  <Route path={window.location.pathname} component={IndividualReviewBox} />
                  <Route component={ErrorPage} />
              </Switch>
          </main>
      </Router>
    )
  };
  
}

export default Main
