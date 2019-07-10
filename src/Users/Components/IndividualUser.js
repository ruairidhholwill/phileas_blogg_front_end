import React,{Component, Fragment} from "react";
import ReviewList from '../../Reviews/Components/ReviewList'
import './IndividualUser.css'

class IndividualUser extends Component{

render(){
    return(
      <Fragment>
        <div className="user-profile-wrapper">

          <h4>Name: {this.props.name}</h4>
          <p>Username: {this.props.username}</p>
          <p>Level: {this.props.level}</p>
        
          </div>

          <div className="user-posts">
          <ReviewList data={this.props.reviews}/>
          </div>

</Fragment>
    );
  }
}

export default IndividualUser;
