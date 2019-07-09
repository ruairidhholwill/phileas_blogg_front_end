import React, { Component } from 'react';
import IndividualReviewList from '../Components/IndividualReviewList'

class IndividualReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewData: []
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidMount() {
        let url = `http://localhost:8080/reviews/${this.props.match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(reviewData => this.setState({ reviewData: reviewData }))
            .catch(err => console.err)
    }

    handleDelete(id) {
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
    
    handleEditSubmit(id, data) {
        let url = `http://localhost:8080/reviews/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .catch(err => console.err)  

    }


    render() {
        return (
            <div className="review-box">
                <IndividualReviewList data={this.state.reviewData} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default IndividualReviewBox
