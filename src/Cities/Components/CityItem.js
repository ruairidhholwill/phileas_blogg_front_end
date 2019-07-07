import React, {Component} from 'react'
import './CityItem.css'

class CityItem extends Component {

    render(){

        return (
            <li className="city-item">
                <h2>{this.props.city}</h2>
                <h4>{this.props.country}</h4>
            </li>
        )
    }

}



export default CityItem;