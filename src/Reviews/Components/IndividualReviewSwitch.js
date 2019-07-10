import React, { Component } from "react";
import IndividualReview from "./IndividualReview";
import EditReviewForm from "./EditReviewForm.js"

class IndividualReviewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'view',
      reviewInEdit: ''
    }

    this.handleEditMode = this.handleEditMode.bind(this);
  }

  handleEditMode(id) {
    this.setState({mode: 'edit', reviewInEdit: id})
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
          user={review.user}
          handleEditMode={this.handleEditMode}
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
    else if (this.state.mode === 'edit') {
      const editReviewForm = this.props.data.map((review) => {
        return (
          <EditReviewForm
              date={review.date} 
              rating={review.rating} 
              title={review.title} 
              key={review.id} 
              text={review.text} 
              country={review.country} 
              id={review.id} 
          />
        )
      })

      return (
        <div>
          {editReviewForm}
        </div>
      )
    

    }
  }
}


export default IndividualReviewList;
