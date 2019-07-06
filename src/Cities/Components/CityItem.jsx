import React, {Component} from 'react'

class CityItem extends Component {

    render(){

        return (
            <li className="city">
                <h3>{this.props.city}</h3>
                <h4>{this.props.country}</h4>
            </li>
        )
    }

}



export default CityItem;