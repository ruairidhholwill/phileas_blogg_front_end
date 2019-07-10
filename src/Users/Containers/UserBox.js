import React, {Component} from 'react'
import UserList from '../Components/UserList.js'


class UserBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <h2>Top Users:</h2>
                <UserList topUsers={this.props.topUsers}/>
            </main>
        )
    }

}



export default UserBox;
