import React, { Component } from "react";
import Review from "./Review";

class ReviewList extends Component{
 render(){
    const reviewNodes = this.props.data.map(review =>{
      return(
          <Review key={review.id}></Review>

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
