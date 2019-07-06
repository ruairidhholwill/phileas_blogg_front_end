import React, { Component } from 'react';
import CityList from '../Components/CityList.js'

class CityContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        fetch("https://restcountries.eu/rest/v2/all?fields=name;capital")
            .then(res => res.json())
            .then(cities => this.setState({ cities: cities}))
            .catch(err => console.error);
    }

    render() {
        return (
            <CityList cities={this.state.cities}></CityList>
        )
    }
    
}

export default CityContainer