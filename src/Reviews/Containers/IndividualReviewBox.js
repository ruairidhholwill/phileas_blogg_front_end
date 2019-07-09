import React, { Component } from 'react';
import IndividualReviewList from '../Components/IndividualReviewList'

class IndividualReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: []
        };

        this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    }

    componentDidMount() {
        let url = `http://localhost:8080/reviews/${this.props.match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(countryData => this.setState({ country: countryData }))
            .catch(err => console.err)
    }

    handleDeleteSubmit(event) {
        console.log(event)
        const id= event.target.value
        let url = `http://localhost:8080/reviews/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(this.setState())
        .catch(err => console.err)
    }

    render() {
        return (
            <div className="review-box">
                <IndividualReviewList data={this.state.country} handleDelete={this.handleDeleteSubmit}/>
            </div>
        )
    }
}

export default IndividualReviewBox
