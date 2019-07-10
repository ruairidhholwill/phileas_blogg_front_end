import React,{Component} from "react";
import './ReviewItem.css';

class Review extends Component{



  render(){
    let finalReviewText = this.props.text;

    if(finalReviewText.length > 130){

      const maxLength = 130;

      finalReviewText = finalReviewText.substr(0, maxLength);
      finalReviewText = finalReviewText.substr(0, Math.min(finalReviewText.length, finalReviewText.lastIndexOf(" ")))
      finalReviewText += ' ...';
    }

    return(


      <div className="review">

            <h4 className="review-title"><a href={"/reviews/" + this.props.id}>{this.props.title}</a></h4>
            <p className="review-content">{finalReviewText}</p>
            <p>Country: {this.props.country}</p>
            <p>Rating: {this.props.rating}</p>
            <p class="post-date">Posted: {this.props.date}</p>
            <p>by {this.props.user.username}</p>

      </div>
    );

  }


}


export default Review;
