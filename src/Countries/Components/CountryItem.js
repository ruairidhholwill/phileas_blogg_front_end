import React, {Component} from 'react'
import './CountryItem.css'

class CountryItem extends Component {

    render(){

        return (
            <li className="country-item">
                <h2>{this.props.city}</h2>
                <h4>{this.props.country}</h4>
            </li>
        )
    }

}



export default CountryItem;