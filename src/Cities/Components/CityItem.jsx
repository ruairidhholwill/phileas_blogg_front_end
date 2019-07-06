import React, {Component} from 'react'

class CityItem extends Component {

    render(){

        return (
            <li className="city">
                <h4>{this.props.country}</h4>
                <h4>{this.props.city}</h4>
            </li>
        )
    }

}



export default CityItem;