import React, {Component} from 'react'
import UserItem from './UserItem'
import './UserList.css'



class UserList extends Component {
    render() {
        const userNodes = this.props.topUsers.map((user, index) => {
            return (
                <UserItem username={user.username} name={user.name} level={user.level} id={user.id} key={index}/>
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