import React from 'react';
import './CityList.css'
import CityItem from './CityItem';

const CityList = (props) => {
    if (props.cities === null || props.cities.length === 0) {
        return <p>Loading...</p>
    }
    return (
        <ul className="city-list">
            {props.cities.map((city, index) => {
            return (
                <CityItem
                    key={index}
                    position={index + 1}
                    country={city.name}
                    city={city.capital}
                />
            )
    })}
        </ul>
    )
}


export default CityList;
