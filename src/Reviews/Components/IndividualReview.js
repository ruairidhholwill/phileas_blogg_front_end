import React,{Component, Fragment} from "react";
import './IndividualReview.css';

class IndividualReview extends Component{

    constructor(props){
      super(props)

      this.handleEditClick = this.handleEditClick.bind(this);
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }


  handleDeleteClick() {
    this.props.handleDelete(this.props.id)
  }

  handleEditClick() {
    this.props.handleEditMode(this.props.id)
  }

  render(){
    return(
      <Fragment>
      <h4>{this.props.title}</h4>
          <div className="review-content-full">
            <p class="country">{this.props.country}</p>
            <p>{this.props.text}</p>
            <p>Rating: {this.props.rating}</p>
            <p>Date: {this.props.date}</p>
            <p>Country: {this.props.country}</p>
            {/* <p>by {this.props.user.username}</p> */}
          </div>
          <div className="buttons-box">
          <input type="button" value="Delete" onClick={this.handleDeleteClick}></input>
          <input type="button" value="Edit" onClick={this.handleEditClick}></input>
        </div>
    </Fragment>
    );
  }

}

export default IndividualReview;
