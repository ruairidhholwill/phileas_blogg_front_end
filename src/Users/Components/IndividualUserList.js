import React, { Component } from "react";
import IndividualUser from "./IndividualUser";

class IndividualUserList extends Component {
    render() {
        const user = this.props.data.map((user, index) => {
            console.log(user)
            return (

                <IndividualUser username={user.username} name={user.name} level={user.level} id={user.id} key={index} reviews={user.reviews} />
            )
        })
        return (
            <div>
                {user}
            </div>
        )
    }
}

export default IndividualUserList