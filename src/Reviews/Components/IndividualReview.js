import React,{Component} from "react";

class IndividualReview extends Component{
    constructor(props){
      super(props)

      this.handleClick = this.handleClick.bind(this);
    }


  handleClick() {
    this.props.handleDelete(this.props.id)
  }

  handleEditClick() {
    this.props.handleEdit(this.props)
  }

  render(){
    return(
        <section className="review-container">
          <div className="review-content">
            <h4>Title: {this.props.title}</h4>
            <p>Text: {this.props.text}</p>
            <p>Rating: {this.props.rating}</p>
            <p>Date: {this.props.date}</p>
            <p>Country: {this.props.country}</p>
          </div>
          <input type="button" value="Delete" onClick={this.handleClick}></input>
          <input type="button" value="Edit" onClick={this.handleEditClick}></input>
        </section>
    );
  }
}

export default IndividualReview;