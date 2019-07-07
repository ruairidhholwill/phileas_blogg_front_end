import React, {Component} from 'react'
import UserForm from '../Components/UserForm.js'
import UserList from '../Components/UserList.js'


class UserBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }

        this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    }

    handleUserFormSubmit(newUser) {
        const updatedUsers = [...this.state.users, newUser];
        this.setState({users: updatedUsers});
    }

    render() {
        return (
            <main>
                <h2>Register new Account</h2>
                <UserForm onFormSubmit={this.handleUserFormSubmit}/>
                <h2>Registered Users:</h2>
                <UserList users={this.state.users}/>
            </main>
        )
    }

}



export default UserBox;
