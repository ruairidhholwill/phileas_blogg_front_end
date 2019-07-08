import React, {Component} from 'react'
import UserItem from './UserItem'


class UserList extends Component {

    render() {
        const userNodes = this.props.topUsers.map(user => {
            return (
                <UserItem username={user.username} name={user.name} level={user.level}/>
            )
        });

        return (
            <main className="user-list">
                {userNodes}
            </main>
        )
    }
}

export default UserList;