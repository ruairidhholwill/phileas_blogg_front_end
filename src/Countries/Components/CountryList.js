import React from 'react';
import './CountryList.css'
import CountryItem from './CountryItem';

const CountryList = (props) => {
    if (props.countries === null || props.countries.length === 0) {
        return <p>Loading...</p>
    }
    return (
        <ul className="countries-list">
            {props.countries.map((country, index) => {
            return (
                <CountryItem
                    key={index}
                    position={index + 1}
                    country={country.name}
                    city={country.capital}
                />
            )
    })}
        </ul>
    )
}


export default CountryList;
