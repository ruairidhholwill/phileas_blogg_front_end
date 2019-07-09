import React, { Component } from 'react';
import './CountryContainer.css'
import CountryList from '../Components/CountryList.js';

class CountryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/countries/all'
        fetch(url)
          .then(res => res.json())
          .then(countries => this.setState({countries: countries}))
          .catch(err => console.error)
    }


    render(){
        return (
            <main className ="country-container">
                <CountryList countries={this.state.countries}/>
            </main>
        )
    }

}

export default CountryContainer
