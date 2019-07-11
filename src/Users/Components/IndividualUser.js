import React,{Component, Fragment} from "react";
import ReviewBox from '../../Reviews/Containers/ReviewBox'
import './IndividualUser.css'

class IndividualUser extends Component{

render(){
    return(
      <Fragment>
        <div className="user-profile-wrapper">

          <h4>Name: {this.props.name}</h4>
          <p>Username: {this.props.username}</p>
          <p>Level: {this.props.level}</p>
          <h3>Reviews:</h3>
          <ReviewBox reviews={this.props.reviews} className="user-review-box"/>
        </div>
      </Fragment>
    );
  }
}

export default IndividualUser;
