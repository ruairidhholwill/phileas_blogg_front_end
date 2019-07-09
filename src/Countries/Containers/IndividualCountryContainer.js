import React, { Component } from 'react';
// import IndividualCountryList from '../Component/IndividualCountryList'

class IndividualCountryContainer extends Component {

    constructor(props) {

        super(props);
        this.state = {
            countryData: [],
            countryReviews: []
        }
    }

    componentDidMount() {
        let countryUrl = `https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`
        fetch(countryUrl)
            .then(res => res.json())
            .then(countryData => this.setState({ user: countryData }))
            .catch(err => console.err)
    }

    
}

export default IndividualCountryContainer