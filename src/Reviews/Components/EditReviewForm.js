import React, { Component } from 'react'


class EditReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: props.id,
          title: props.title,
          rating: props.rating ,
          date: props.date,
          text: props.text,
          country: props.country,
          countryNames: []
        };
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateOptions = this.generateOptions.bind(this);
    
    
    
    }

    componentDidMount() {
        let countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name'
            fetch(countriesUrl)
                .then(res => res.json())
                .then(countryNames => this.setState({ countryNames: countryNames}))
                .catch(err => console.error)    
    }

    handleSubmit(event){
        event.preventDefault();
        const id = this.state.id
        const title = this.state.title.trim();
        const rating = this.state.rating;
        const date = this.setFormattedDate()
        const text = this.state.text.trim();
        const country = this.state.country

        if (!title || !rating || !date || !text || !country){
        return
        }

        this.props.handleEditSubmit(this.state.id, {id: id, title: title, rating: rating, date: date, text: text, country: country})
        this.setState({title: '', rating: '', date: '', text: '', country: ''});
    }

    handleTitleChange(event){
    this.setState({title: event.target.value})
    }

    handleRatingChange(event){
    this.setState({rating: event.target.value})

    }

    handleDateChange(event){
    this.setState({date: event.target.value})
    }

    handleTextChange(event){
    this.setState({text: event.target.value})
    }

    handleSelectChange(event){
    this.setState({country: event.target.value})
    }

    generateOptions(){
    const options = this.state.countryNames.map((country, index) => {
        // if (country.name === this.props.country) {
            return <option value={country.name} key={index}>{country.name}</option>
        // }
        // else {
        //     return <option value={country.name} key={index}>{country.name}</option>
        // }
    })
    return options
    }

    setFormattedDate() {
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    let formattedDate = date.getDate() + " " + monthNames[(date.getMonth())] + " " +  date.getFullYear();
    return formattedDate;
    }
    
    
    
    render(){
    // debugger;
      return(
          
        <main className="review-form-main">

        <h2>Edit review of {this.props.country}:</h2>
          <form className="review-form" onSubmit={this.handleSubmit}>
            <label id="country-selector">Select country: </label>
                <select id="country-selector" value={this.state.country} onChange={this.handleSelectChange}>
                {this.generateOptions()}
                </select>
          
            <label id="title">Title: </label>
                <input id="title" type="text" placeholder="Write title" value={this.state.title} onChange={this.handleTitleChange}/>
          
            <label id="rating"> Rating: </label>
                <div id="rating" className="rating-stars" onChange={this.handleRatingChange}>
                    <input type="radio" name="rating" value = '1' />
                    <input type="radio" name="rating" value = '2' />
                    <input type="radio" name="rating" value = '3' />
                    <input type="radio" name="rating" value = '4' />
                    <input type="radio" name="rating" value = '5' />
                </div>
          
            <input type="hidden"  value={this.state.country} onChange={this.handleDateChange}/>
            
            <label id="text">Update review: </label>
                <textarea id="text" placeholder="Write review" value={this.state.text} onChange={this.handleTextChange}></textarea>
            
                <input type="submit" value="Update Review"/>
          </form>
        </main>
    
      )
    }

}


export default EditReviewForm