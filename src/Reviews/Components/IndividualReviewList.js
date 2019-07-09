import React, { Component } from "react";
import IndividualReview from "./IndividualReview";

class IndividualReviewList extends Component {
  render() {
<<<<<<< HEAD
      const review = this.props.data.map((review) => {
      return (

        <IndividualReview 
          date={review.date} 
          rating={review.rating} 
          title={review.title} 
          key={review.id} 
          text={review.text} 
          country={review.country} 
          id={review.id} 
          handleDelete={this.props.handleDelete}
        />
=======
    const review = this.props.data.map((review, index) => {
      return (

        <IndividualReview date={review.date} rating={review.rating} title={review.title} key={index} text={review.text} country={review.country} id={review.id}></IndividualReview>
>>>>>>> 27cfabbaa6beb1156b1a56d45685a3659061b52f

      );
    })

    return (
      <div>
        {review}
      </div>
    )
  }
}


export default IndividualReviewList;