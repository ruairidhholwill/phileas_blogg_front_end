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
    }

   

  postData(data){
    return fetch('http://localhost:8080/reviews', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  render(){
    return(
      <div className="comment-box">
        <h2>Add Review</h2>
        <ReviewForm onReviewSubmit={this.postData}/>
        <h2>Reviews</h2>
        <ReviewList data={this.state.data}/>
      </div>
    )
  }

}

export default ReviewBox;
