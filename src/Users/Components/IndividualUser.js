import React,{Component} from "react";
import ReviewBox from '../../Reviews/Containers/ReviewBox'

class IndividualUser extends Component{

render(){
    return(
        <div className="user">
          <h4>Name: {this.props.name}</h4>
          <p>Username: {this.props.username}</p>
          <p>Level: {this.props.level}</p>
          <h3>Reviews:</h3>
          <ReviewBox reviews={this.props.reviews}/>
        </div>
    );
  }
}

export default IndividualUser;