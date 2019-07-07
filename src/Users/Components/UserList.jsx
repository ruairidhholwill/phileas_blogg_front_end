import React, {Component} from 'react'


class UserList extends Component {

    render() {
        const userNodes = this.props.users.map(user => {
            return (
                <UserItem username={user.username} name={user.name}/>
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