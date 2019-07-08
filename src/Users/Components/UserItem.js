import React, { Component } from 'react'
import './UserItem.css'

class UserItem extends Component {
    render() {
        return (
            <div className="user-item">
                <h2>{this.props.username}</h2>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}


export default UserItem;
