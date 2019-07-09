import React, { Component } from "react";
import IndividualCountry from "./IndividualCountry";
import ReviewList from '../../Reviews/Components/ReviewList'

class IndividualCountryList extends Component {
    render(){
        console.log("Country", this.props.countryData)
        console.log("reviews", this.props.reviewData)
        const country = this.props.countryData.map((country, index) => {
            return (

                <IndividualCountry name={country.name} currency={country.currencies[0].name} symbol={country.currencies[0].symbol} language={country.languages[0].name} capital={country.capital} region={country.region} key={index} />
            )
        })

        // const reviews = this.props.reviewData

        // const reviews = this.props.reviewData.map((review, index) => {
        //     return (

        //         <IndividualCountry review={review.date} 
        //         rating={review.rating} 
        //         title={review.title} 
        //         key={index} 
        //         text={review.text} 
        //         country={review.country} 
        //         id={review.id}  />
        //     )
        // })

        return (
            <div>
                {country}
                {/* {reviews} */}
            </div>
        )
    }
}

export default IndividualCountryList