import React, {Component} from 'react';
import './ReviewForm.css'

class ReviewForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      rating:'',
      date:'',
      text:'',
      country: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateOptions = this.generateOptions.bind(this);



    }

    handleSubmit(event){
      event.preventDefault();
      const title = this.state.title.trim();
      const rating = this.state.rating;
      const date = this.state.date.trim();
      const text = this.state.text.trim();
      const country = this.state.country

      if (!title || !rating || !date || !text || !country){
        return
      }

      this.props.onReviewSubmit({title: title, rating: rating, date: date, text: text, country: country})
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
    const options = this.props.countries.map((country, index) => {
      return <option value={country.name} key={index}>{country.name}</option>
    })
    return options
  }



render(){
  return(
    <main className="review-form-main">
    <h2>Submit review:</h2>
      <form className="review-form" onSubmit={this.handleSubmit}>
      <label for="country-selector">Select country: </label>
        <select  id="country-selector" defaultValue="default" onChange={this.handleSelectChange}>
        <option disabled value="default">Choose a country...</option>
        {this.generateOptions()}
        </select>
      
      <label for="title">Title: </label>
        <input id="title" type="text" placeholder="Write title" value={this.state.title} onChange={this.handleTitleChange}/>
      
      <label for="rating"> Rating: </label>
        <div id="rating" className="rating-stars" onChange={this.handleRatingChange}>
            <input type="radio" name="rating" value = '1' />
            <input type="radio" name="rating" value = '2' />
            <input type="radio" name="rating" value = '3' />
            <input type="radio" name="rating" value = '4' />
            <input type="radio" name="rating" value = '5' />
        </div>
      
      <label for="date">Select date: </label>
        <input id="date" type="date" value={this.state.date} onChange={this.handleDateChange}/>
      
      <label for="text">Write review: </label>
        <textarea id="text" placeholder="Write review" value={this.state.text} onChange={this.handleTextChange}></textarea>
      
        <input type="submit" value="Write Review"/>
      </form>
    </main>

  )
}
}

export default ReviewForm;
