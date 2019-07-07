import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList"
import ReviewForm from "../Components/ReviewForm"


class ReviewBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.postData = this.postData.bind(this)
  }

  componentDidMount() {
    const url = "http://localhost:8080/reviews"
    fetch(url)
      .then(res => res.json())
      .then(reviewData => this.setState({ reviews: reviewData._embedded.reviews }))
      .catch(err => console.err)
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

  render() {
    return (
      <div className="comment-box">
        <h2>Add Review</h2>
        <ReviewForm onReviewSubmit={this.postData}/>
        <h2>Reviews</h2>
        <ReviewList data={this.state.reviews} />
      </div>
    )
  }

}

export default ReviewBox;
