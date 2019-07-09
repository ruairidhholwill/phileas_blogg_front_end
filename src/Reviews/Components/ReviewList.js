import React, { Component } from "react";
import Review from "./Review";
import "./ReviewList.css"

class ReviewList extends Component {
  render() {
    const reviewNodes = this.props.data.map((review, index) => {
      return (
        <Review date={review.date} rating={review.rating} title={review.title} key={review.id} value={index} text={review.text} country={review.country} id={review.id} user={review.user}></Review>

      );
    })

    return (
      <div className="review-list">
        {reviewNodes}
      </div>
    )

  }
}


export default ReviewList;
