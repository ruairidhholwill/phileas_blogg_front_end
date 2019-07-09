import React,{Component} from "react";
import {Link} from 'react-router-dom'

class Review extends Component{



render(){
    return(
      <Link to={`/reviews/${this.props.id}`}>
      {/* <a href={"/reviews/" + this.props.id}> */}
        <div className="review">
          <h4>Title: {this.props.title}</h4>
          <p>Text: {this.props.text}</p>
          <p>Rating: {this.props.rating}</p>
          <p>Date: {this.props.date}</p>
          <p>Country: {this.props.country}</p>
        </div>
     {/* </a> */}
    </Link>
    );
  }
}

export default Review;
