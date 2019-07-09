import React, { Component } from 'react';
import IndividualReviewList from '../Components/IndividualReviewList'

class IndividualReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: []
        };
    }

    componentDidMount() {
        let url = `http://localhost:8080${this.props.location.pathname}`
        fetch(url)
            .then(res => res.json())
            .then(countryData => this.setState({ country: countryData }))
            .catch(err => console.err)
    }

    render() {
        return (
            <div className="review-box">
                <IndividualReviewList data={this.state.country} />
            </div>
        )
    }
}

export default IndividualReviewBox
