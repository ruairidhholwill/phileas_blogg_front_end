import React, {Component} from 'react'
import UserForm from '../Components/UserForm.js'
import UserList from '../Components/UserList.js'


class UserBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            topUsers: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:8080/users/all"
        fetch(url)
          .then(res => res.json())
          .then(userData => this.setState({ users: userData }))
          .catch(err => console.err)

        let topUsersURL = "http://localhost:8080/users/ranking"
        fetch(topUsersURL)
        .then(res => res.json())
        .then(topUserData => this.setState({ topUsers: topUserData }))
        .catch(err => console.err)
      }

    render() {
        return (
            <main>
                <h2>Top Users:</h2>
                <UserList topUsers={this.state.topUsers}/>
            </main>
        )
    }

}



export default UserBox;
