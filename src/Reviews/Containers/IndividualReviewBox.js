import React, { Component } from 'react';
import IndividualReviewList from '../Components/IndividualReviewList'
import { Redirect } from 'react-router-dom'

class IndividualReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewData: [],
            redirect: false
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
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                this.setState({ reviewData: [] })
                this.setRedirect()
            }
        })
        .catch(err => console.err)
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/reviews' />
        }
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
                <IndividualReviewList data={this.state.reviewData} handleDelete={this.handleDelete} handleEditSubmit={this.handleEditSubmit}/>
                {this.renderRedirect()}
            </div>
        )
    }
}

export default IndividualReviewBox
