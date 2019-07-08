import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList"
import ReviewForm from "../Components/ReviewForm"


class ReviewListBox extends Component {

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
      .then(reviewedCountry => this.setState({ reviewedCountries: reviewedCountry }))
      .catch(err => console.error)
  }

  

  
  

  render() {
    return (
      <div className="comment-box">
        {/* <h2>Add Review</h2>
        <ReviewForm onReviewSubmit={this.postData} countries={this.state.countries} /> */}
        <h2>Reviews</h2>
        <ReviewList data={this.state.reviews} />
      </div>
    )
  }

}

export default ReviewListBox;
