import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList";
import NavBar from "../../Navigation/NavBar";


class ReviewBox extends Component {

  constructor(props) {

    super(props);
    this.state = {
      countries: [],
      // reviews: [],
      reviewedCountries: [],
      searchedReviews: []
    };
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    // let reviewsUrl = "http://localhost:8080/reviews/all"
    // fetch(reviewsUrl)
    //   .then(res => res.json())
    //   .then(reviewData => this.setState({ reviews: reviewData }))
    //   .catch(err => console.err)

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

  // handleChange(event) {
  //   if (event.target.value.length > 0) {
  //     let reviewsUrl = `http://localhost:8080/reviews/contains/${event.target.value}`
  //     fetch(reviewsUrl)
  //       .then(res => res.json())
  //       .then(reviewData => this.setState({ reviews: reviewData }))
  //       .catch(err => console.err)
  //   } else if (event.target.value.length === 0) {
  //     let reviewsUrl = `http://localhost:8080/reviews/all`
  //     fetch(reviewsUrl)
  //       .then(res => res.json())
  //       .then(reviewData => this.setState({ reviews: reviewData }))
  //       .catch(err => console.err)
  //   }
  // }

  render() {
    return (
      <div>
        <div className="search-bar-wrapper">
      // SEARCH
        </div>
        <main className="review-box">
          <ReviewList data={this.props.reviews} />
        </main>
      </div>
    )
  }

}



export default ReviewBox;
