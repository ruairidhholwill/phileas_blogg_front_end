import React, { Component } from "react";
import IndividualReview from "./IndividualReview";

class IndividualReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'view'
    }
  }

  render() {
    if (this.state.mode === 'view') {
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
          handleEdit={this.props.handleEdit}
          handleDelete={this.props.handleDelete}
        />

        );
      })

      return (
        <div>
          {review}
        </div>
      )

    }
    // else {
    //   <EditReviewForm/>

    // }
  }
}


export default IndividualReviewList;
