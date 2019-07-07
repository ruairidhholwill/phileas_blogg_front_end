import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList"
import ReviewForm from "../Components/ReviewForm"


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
    let reviewsUrl = "http://localhost:8080/reviews"
    fetch(reviewsUrl)
      .then(res => res.json())
      .then(reviewData => this.setState({ reviews: reviewData._embedded.reviews }))
      .catch(err => console.err)

    let countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name'
    fetch(countriesUrl)
      .then(res => res.json())
      .then(countries => this.setState({countries: countries}))
      .catch(err => console.error)
  }

  postData(data) {
    console.log(this.state.reviewedCountries)
    if (this.state.reviewedCountries.indexOf(data.country) < 0) {
    // if (this.prevState.reviewedCountries.includes(data.country)) {
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
        return {reviewedCountries: [...prevState.reviewedCountries, reviewedCountry.name]}
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
        return {reviews: [...prevState.reviews, reviewData]}
      }))
      
  }

  render() {
    return (
      <div className="comment-box">
        <h2>Add Review</h2>
        <ReviewForm onReviewSubmit={this.postData} countries={this.state.countries}/>
        <h2>Reviews</h2>
        <ReviewList data={this.state.reviews} />
      </div>
    )
  }

}

export default ReviewBox;
