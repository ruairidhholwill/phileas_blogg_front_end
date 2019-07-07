import React, { Component } from "react";
import Review from "./Review";

class ReviewList extends Component{
 render(){
    const reviewNodes = this.props.data.map(review =>{
      return(
          <Review date={review.date} rating={review.rating} title={review.title} key={review.id} text={review.text}></Review>

      );
    })

    return(
      <div className="review-list">
        {reviewNodes}
      </div>
    )

}
}


export default ReviewList;
