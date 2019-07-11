import React, { Component } from 'react';
import Review from "../Components/Review";
import './ReviewBox.css'



class ReviewBox extends Component {

  render() {
    const reviewNodes = this.props.reviews.map((review, index) => {
      return (
        <Review date={review.date} rating={review.rating} title={review.title} key={review.id} value={index} text={review.text} country={review.country} id={review.id} user={review.user}></Review>
      )
    })
    return (
      <div>
        <div className="search-bar-wrapper">
        </div>
        <main className="review-box">
          {reviewNodes}
        </main>
      </div>
    )
  }
}






export default ReviewBox;
