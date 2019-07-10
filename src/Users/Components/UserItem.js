import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './UserItem.css'

class UserItem extends Component {
    render() {

        return (
            <Link to={`/users/${this.props.id}`}>
            <div className="user-item">
                <h2>{this.props.name}</h2>
                <h3>{this.props.username}</h3>
            </div>
            </Link>
        )
    }
}


export default UserItem;
