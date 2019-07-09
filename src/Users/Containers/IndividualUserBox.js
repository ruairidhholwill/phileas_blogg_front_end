import React, { Component } from 'react';
import IndividualUserList from '../Components/IndividualUserList'

class IndividualUserBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        let url = `http://localhost:8080/users/${this.props.match.params.id}`
        fetch(url)
            .then(res => res.json())
            .then(userData => this.setState({ user: userData }))
            .catch(err => console.err)
    }

    render() {
        return (
            <div className="user-box">
                <IndividualUserList data={this.state.user} />
            </div>
        )
    }
}

export default IndividualUserBox