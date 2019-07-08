import React, {Component} from 'react'
import UserForm from '../Components/UserForm.js'
import UserList from '../Components/UserList.js'


class UserBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.postData = this.postData.bind(this)
    }

    componentDidMount() {
        const url = "http://localhost:8080/users/all"
        fetch(url)
          .then(res => res.json())
          .then(userData => this.setState({ users: userData }))
          .catch(err => console.err)
      }

      postData(data) {
        console.log(data)
        return fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(userData => this.setState(prevState => {
            return {users: [...prevState.users, userData]}
          }))
      }

    render() {
        return (
            <main>
                <h2>Register new Account</h2>
                <UserForm onFormSubmit={this.postData}/>
                <h2>Registered Users:</h2>
                <UserList users={this.state.users}/>
            </main>
        )
    }

}



export default UserBox;
