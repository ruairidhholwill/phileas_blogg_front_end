import React, { Component } from 'react';
import ReviewList from '../Components/ReviewList'

class ReviewBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
        countries: [],
        reviews: [],
        reviewedCountries: []
      };
      this.postData = this.postData.bind(this)
    }
  
    componentDidMount() {
      let reviewsUrl = "http://localhost:8080/reviews/all"
      fetch(reviewsUrl)
        .then(res => res.json())
        .then(reviewData => this.setState({ reviews: reviewData }))
        .catch(err => console.err)
  
      let countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name'
      fetch(countriesUrl)
        .then(res => res.json())
        .then(countries => this.setState({ countries: countries }))
        .catch(err => console.error)
  
      let reviewedCountriesUrl = 'http://localhost:8080/countries'
      fetch(reviewedCountriesUrl)
        .then(res => res.json())
        .then(reviewedCountry => this.setState({ reviewedCountries: reviewedCountry }))
        .catch(err => console.error)
    }
  
    postData(data) {
      const countries = this.state.reviewedCountries.map(country => country.name)
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
        method: 'GET',
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
    
  
    render() {
      return (
        <main className="review-box">
         <ReviewList data={this.state.reviews}/>
        </main>
      )
    }
  
  }
  
  export default ReviewBox;