import React, { Component } from 'react';
import IndividualCountryList from '../Components/IndividualCountryList'

class IndividualCountryContainer extends Component {

    constructor(props) {

        super(props);
        this.state = {
            country: [],
            countryReviews: []
        }
    }

    componentDidMount() {
        let countryUrl = `https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`
        fetch(countryUrl)
            .then(res => res.json())
            .then(countryData => this.setState({ country: countryData }))
            .catch(err => console.err)

        let reviewsUrl = `http://localhost:8080/reviews/country/${this.props.match.params.name}`
        fetch(reviewsUrl)
            .then(res => res.json())
            .then(reviewData => this.setState({ countryReviews: reviewData }))
            .catch(err => console.err)
    }

    render() {
        return (
            <div className="user-box">
                <IndividualCountryList countryData={this.state.country} reviewData={this.state.countryReviews} />
            </div>
        )
    }



}

export default IndividualCountryContainer