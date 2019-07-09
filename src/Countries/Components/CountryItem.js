import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './CountryItem.css'

class CountryItem extends Component {

    render(){

        return (
            <Link to={`/countries/${this.props.country}`}>
            <li className="country-item">
                <h2>{this.props.country}</h2>
                {/* <h4>{this.props.country}</h4> */}
            </li>
            </Link>
        )
    }

}



export default CountryItem;