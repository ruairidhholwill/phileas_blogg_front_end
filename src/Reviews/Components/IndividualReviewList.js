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
      return (
        <IndividualReview
          date={this.props.data.date} 
          rating={this.props.data.rating} 
          title={this.props.title} 
          key={this.props.data.id} 
          text={this.props.text} 
          country={this.props.country} 
          id={this.props.data.id} 
          handleEditMode={this.handleEditMode}
          handleDelete={this.props.handleDelete}
        />
      );
    }
  else if (this.state.mode === 'edit') {
      return (
        <EditReviewForm 
          date={this.props.data.date} 
          rating={this.props.data.rating} 
          title={this.props.data.title} 
          key={this.props.data.id} 
          text={this.props.data.text} 
          country={this.props.data.country} 
          id={this.props.data.id} 
          handleEditSubmit={this.props.handleEditSubmit}
        />
      )
    }
  }


}


export default IndividualReviewList;
