import React, { Component } from 'react'
import './UserItem.css'

class UserItem extends Component {
    render() {
        return (
            <div className="user-item">
                <h3>{this.props.username}</h3>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}


export default UserItem;


