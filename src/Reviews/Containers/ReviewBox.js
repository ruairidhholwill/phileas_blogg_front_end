import React, { Component } from 'react';
import ReviewList from "../Components/ReviewList";
import NavBar from "../../Navigation/NavBar";


class ReviewBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="search-bar-wrapper">
        </div>
        <main className="review-box">
          <ReviewList data={this.props.reviews} />
        </main>
      </div>
    )
  }
}






export default ReviewBox;
