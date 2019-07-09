import React, {Component} from "react"
import ReviewList from '../../Reviews/Components/ReviewList'

class IndividualCountry extends Component {

    render(){
        // debugger
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h4> Capital City: {this.props.capital}</h4>
                <h4> Main Language: {this.props.language}</h4>
                <h4> Currency: {this.props.currency} ({this.props.symbol})</h4>
                <h4> Region: {this.props.region}</h4>
                <h3>Reviews:</h3>
                {/* <ReviewList data={this.props.reviews}/> */}



                
            </div>
        )
    }
}

export default IndividualCountry 