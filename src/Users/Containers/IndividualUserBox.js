import React, { Component } from 'react';
import IndividualUser from '../Components/IndividualUser'

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
        const user = this.state.user.map((user, index) => {
            return (
                <IndividualUser username={user.username} name={user.name} level={user.level} id={user.id} key={index} reviews={user.reviews} />
            )
        })
        return (
            <div className="user-box">
                {user}
            </div>
        )
    }
}

export default IndividualUserBox