import React, {Component} from 'react';
import ReviewList from "../Components/ReviewList"
import ReviewForm from "../Components/ReviewForm"


class ReviewBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[
        { id: 1,
          title: "Awesome city",
          text: "That was amazing experience",
          rating: 4,
          date: "2019-05-27"
        },
        { id: 2,
          title: "Super Awesome city",
          text: "That was awesome trip.",
          rating: 5,
          date: "2019-02-01"
        }
      ]
    };

      this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }
    handleReviewSubmit(submittedReview){
      submittedReview.id = Date.now();
      const updatedReviews = [...this.state.data, submittedReview];
      this.setState({data: updatedReviews})

  }

  render(){
    return(
      <div className="comment-box">
        <h2>Add Review</h2>
        <ReviewForm onReviewSubmit= {this.handleReviewSubmit}/>
        <h2>Reviews</h2>
        <ReviewList data={this.state.data}/>
      </div>
    )
  }

}

export default ReviewBox;
