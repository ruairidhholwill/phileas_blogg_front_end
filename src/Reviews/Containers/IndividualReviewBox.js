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
        let url = `http://localhost:8080/reviews/${this.props.match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(countryData => this.setState({ country: countryData }))
            .catch(err => console.err)
    }

    handleDeleteSubmit() {
        let url = `http://localhost:8080${this.props.location.pathname}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(this.setState())
    }

    render() {
        return (
            <div className="review-box">
                <IndividualReviewList data={this.state.country} onDelete={this.handleDeleteSubmit}/>
            </div>
        )
    }
}

export default IndividualReviewBox
