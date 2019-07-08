import React, {Component} from 'react'
import UserItem from './UserItem'
import './UserList.css'



class UserList extends Component {

    render() {
        const userNodes = this.props.topUsers.map(user => {
            return (
                <UserItem username={user.username} name={user.name} level={user.level}/>
            )
        });

        return (
            <div class="user-list-box">
            <main className="user-list">
                {userNodes}
            </main>
            </div>
        )
    }
}

export default UserList;