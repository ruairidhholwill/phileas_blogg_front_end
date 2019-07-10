import React, {Component} from 'react'
import UserItem from '../Components/UserItem'


class UserBox extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const userNodes = this.props.topUsers.map((user, index) => {
            return (
                <UserItem username={user.username} name={user.name} level={user.level} id={user.id} key={index}/>
            )
        });
        return (
            <main>
                <h2>Top Users:</h2>
                {userNodes}
            </main>
        )
    }

}



export default UserBox;
