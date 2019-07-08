import React, {Component} from 'react'
import Review from './Review'


class SelectedReview extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedReview: {}
        }
    }


    componentDidMount() {
        let reviewsUrl = "http://localhost:8080/reviews/1"
        fetch(reviewsUrl)
          .then(res => res.json())
          .then(reviewData => this.setState({ selectedReview: reviewData }))
          .catch(err => console.err)
    }

    render () {
        console.log(this.state.selectedReview)
        return (
            <Review data={this.state.selectedReview}/>
        )
    }


    


}


export default SelectedReview

