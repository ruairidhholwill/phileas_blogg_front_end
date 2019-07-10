import React, { Component } from "react";
import NavBar from "./NavBar";
import './Main.css'
import UserForm from "../Users/Components/UserForm"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReviewForm from "../Reviews/Components/ReviewForm";
import IndividualReviewBox from "../Reviews/Containers/IndividualReviewBox"
import IndividualUserBox from "../Users/Containers/IndividualUserBox"
import ErrorPage from './ErrorPage'
import HomeNavBar from "./HomeNavBar"
import UserBox from "../Users/Containers/UserBox"
import ReviewBox from "../Reviews/Containers/ReviewBox";
import Home from "./Home"
import { Redirect } from 'react-router-dom'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      reviews: [],
      displayReviews: [],
      topUsers: [],
      countries: [],
      reviewedCountries: [],
      reviewRedirect: false,
      userRedirect: false
    }

    this.postUserData = this.postUserData.bind(this);
    this.postReviewData = this.postReviewData.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount() {
    let allUsersURL = "http://localhost:8080/users"
    fetch(allUsersURL)
      .then(res => res.json())
      .then(userData => this.setState({ users: userData._embedded.users }))
      .catch(err => console.err)

    let reviewsUrl = "http://localhost:8080/reviews/all"
    fetch(reviewsUrl)
      .then(res => res.json())
      .then(reviewData => this.setState({ reviews: reviewData, displayReviews: reviewData }))
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


  handleSearchChange(event) {
    if (event.target.value.length > 0) {
      let reviewsUrl = `http://localhost:8080/reviews/contains/${event.target.value}`
      fetch(reviewsUrl)
        .then(res => res.json())
        .then(reviewData => this.setState({ displayReviews: reviewData }))
        .catch(err => console.err)
    } else if (event.target.value.length === 0) {
      let reviewsUrl = `http://localhost:8080/reviews/all`
      fetch(reviewsUrl)
        .then(res => res.json())
        .then(reviewData => this.setState({ displayReviews: reviewData }))
        .catch(err => console.err)
    }
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
        return { users: [...prevState.users, userData] }
      }))
      .then(this.setUserRedirect)
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
        return { displayReviews: [...prevState.reviews, reviewData] }
      }))
      .then(this.setReviewRedirect)
  }

  setReviewRedirect = () => {
    this.setState({
      reviewRedirect: true
    })
  }

  renderReviewRedirect = () => {
    if (this.state.reviewRedirect) {
      this.setState({
        reviewRedirect: false
      })
      return <Redirect to='/reviews' />
    }
  }

  setUserRedirect = () => {
      this.setState({
        userRedirect: true
      })
    }
  
  renderUserRedirect = () => {
      if (this.state.userRedirect) {
        this.setState({
          userRedirect: false
        })
        return <Redirect to='/users' />
      }
    }

  render() {
    return (
      <Router>
        <main className="layout">
          <header>
            <NavBar className="main-nav"  />

          </header>
          <HomeNavBar className="home-nav" handleSearchChange={this.handleSearchChange}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" render={() => <UserBox topUsers={this.state.topUsers} /> } />
            <Route exact path="/reviews" render={() => <ReviewBox reviews={this.state.displayReviews} />} />
            <Route path="/add-user" render={() => <UserForm onFormSubmit={this.postUserData} />} />
            <Route path="/add-review" render={() => <ReviewForm countries={this.state.countries} users={this.state.users} onReviewSubmit={this.postReviewData} />} />
            <Route path="/reviews/:id" component={IndividualReviewBox} />
            <Route path="/users/:id" component={IndividualUserBox} />
            <Route component={ErrorPage} />
          </Switch>
          {this.renderReviewRedirect()}
          {this.renderUserRedirect()}
        </main>
      </Router>
    )
  }
}


export default Main
