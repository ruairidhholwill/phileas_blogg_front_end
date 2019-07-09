import React,{Component} from "react";

class IndividualUser extends Component{

render(){
    return(
        <div className="user">
          <h4>Name: {this.props.name}</h4>
          <p>Username: {this.props.username}</p>
          <p>Level: {this.props.level}</p>
          <p>Reviews: {this.props.reviews.forEach(review => {         
              console.log( review.title)
          })}</p>
        </div>
    );
  }
}

export default IndividualUser;