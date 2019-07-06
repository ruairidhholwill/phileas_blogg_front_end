import React from 'react';
import CityItem from './CityItem';

const CityList = (props) => {
    if (props.cities === null || props.cities.length === 0) {
        return <p>Loading...</p>
    }
    return (
        <main>
            <h1>Capital Cities</h1>
            <ul>
                {props.cities.map((city, index) =>{
                    return (
                        <CityItem
                            key={index}
                            country={city.name}
                            city={city.capital}
                        />
                    )
                })}
            </ul>
        </main>
    )
}


export default CityList;