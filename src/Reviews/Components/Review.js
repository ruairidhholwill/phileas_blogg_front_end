import React,{Component} from "react";

class Review extends Component{
render(){
    return(
      <div className="review">

      <h4>{this.props.title}</h4>
      <p>{this.props.text}</p>
      <p>{this.props.rating}</p>
      <p>{this.props.date}</p>
      </div>
    );
  }
}

export default Review;
