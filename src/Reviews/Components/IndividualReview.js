import React,{Component} from "react";

class IndividualReview extends Component{
    
    constructor(props){
      super(props)

      this.handleEditClick = this.handleEditClick.bind(this);
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }


  handleDeleteClick() {
    this.props.handleDelete(this.data.id)
  }

  handleEditClick() {
    this.props.handleEditMode(this.data.id)
  }

  render(){
    return(
        <section className="review-container">
          <div className="review-content">
            <h4>Title: {this.props.data.title}</h4>
            <p>Text: {this.props.data.text}</p>
            <p>Rating: {this.props.data.rating}</p>
            <p>Date: {this.props.data.date}</p>
            <p>Country: {this.props.data.country}</p>
          </div>
          <input type="button" value="Delete" onClick={this.handleDeleteClick}></input>
          <input type="button" value="Edit" onClick={this.handleEditClick}></input>
        </section>
    );
  }

}

export default IndividualReview;
