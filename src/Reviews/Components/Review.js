import React,{Component} from "react";
import { Link } from 'react-router-dom';


class Review extends Component{



render(){
    return(
      <div className="review">

      <h4><Link to="/review/{id}">Title: {this.props.title}</Link></h4>
      <p>Text: {this.props.text}</p>
      <p>Rating: {this.props.rating}</p>
      <p>Date: {this.props.date}</p>
      <p>Country: {this.props.country}</p>
      </div>
    );
  }
}

export default Review;
