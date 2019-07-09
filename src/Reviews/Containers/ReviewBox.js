import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList"


class ReviewBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      reviews: [],
      reviewedCountries: []
    };
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
      .then(reviewedCountry => this.setState({ reviewedCountries: reviewedCountry._embedded.countries }))
      .catch(err => console.error)
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
