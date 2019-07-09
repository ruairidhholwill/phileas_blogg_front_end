import React, { Component } from "react";
import IndividualReview from "./IndividualReview";

class IndividualReviewList extends Component {
  render() {
      const review = this.props.data
      return (

        <IndividualReview date={review.date} rating={review.rating} title={review.title} key={review.id} text={review.text} country={review.country} id={review.id} handleDelete={this.handleDelete}/>

      );
  }

}


export default IndividualReviewList;