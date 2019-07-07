import React, { Component } from 'react';
import CountryList from '../Components/CountryList.js';
import ReviewForm from '../../Reviews/Components/ReviewForm.js';

class CountryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all?fields=name;capital'
        fetch(url)
          .then(res => res.json())
          .then(countries => this.setState({countries: countries}))
          .catch(err => console.error)
    }


    render(){
        return (
            <main>
                <ReviewForm countries={this.state.countries}/>
                <CountryList countries={this.state.countries}/>
            </main>
        )
    }

}

export default CountryContainer
