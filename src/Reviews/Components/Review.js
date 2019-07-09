import React,{Component} from "react";
import './ReviewItem.css';

class Review extends Component{



render(){
let reviewContent = this.props.text;

if(this.props.text.length > 130){

  let maxLength = 130;

  let shorterReview = reviewContent.substr(0, maxLength);
  shorterReview = shorterReview.substr(0, Math.min(shorterReview.length, shorterReview.lastIndexOf(" ")))


return(


        <div className="review">

          <h4 className="review-title"><a href={"/reviews/" + this.props.id}>{this.props.title}</a></h4>
          <p className="review-content">{shorterReview + '...'}</p>
          <p>Country: {this.props.country}</p>
          <p>Rating: {this.props.rating}</p>
          <p class="post-date">Posted: {this.props.date}</p>

        </div>
);

} else {

  return(


      <div className="review">

        <h4 className="review-title"><a href={"/reviews/" + this.props.id}>{this.props.title}</a></h4>
        <p className="review-content">{this.props.text}</p>
        <p>Country: {this.props.country}</p>
        <p>Rating: {this.props.rating}</p>
        <p class="post-date">Posted: {this.props.date}</p>
      </div>
);}


  }
}

export default Review;
