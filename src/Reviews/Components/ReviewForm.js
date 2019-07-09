import React, {Component} from 'react';

class ReviewForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      rating:'',
      date:'',
      text:'',
      country: '',
      user: '',
      user_id: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateCountryOptions = this.generateCountryOptions.bind(this);
    this.generateUserOptions = this.generateUserOptions.bind(this);
    this.handleUserIDSelectChange = this.handleUserIDSelectChange.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();
      const title = this.state.title.trim();
      const rating = this.state.rating;
      const date = this.state.date.trim();
      const text = this.state.text.trim();
      const country = this.state.country
      const user_id = this.state.user_id

      if (!title || !rating || !date || !text || !country || !user_id){
        return
      }

      this.props.onReviewSubmit({title: title, rating: rating, date: date, text: text, country: country, user_id: user_id})
      this.setState({title: '', rating: '', date: '', text: '', country: '', user_id: ''});
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

  handleUserIDSelectChange(event){
    this.setState({user_id: event.target.value})
  }

  generateCountryOptions(){
    const options = this.props.countries.map((country, index) => {
      return <option value={country.name} key={index}>{country.name}</option>
    })
    return options
  }

  generateUserOptions(){
    const options = this.props.users.map((user, index) => {      
      return <option value={user.id} key={index}>{user.id}</option>
    })
    return options
  }



render(){
  return(
    <form className="review-form" onSubmit={this.handleSubmit}>

    <select id="country-selector" defaultValue="default" onChange={this.handleSelectChange}>
      <option disabled value="default">Choose a country...</option>
      {this.generateCountryOptions()}
    </select>

    <select id="user-selector" defaultValue="default" onChange={this.handleUserIDSelectChange}>
      <option disabled value="default">Choose a user...</option>
      {this.generateUserOptions()}
    </select>

    <input type="text" placeholder="Write title" value={this.state.title} onChange={this.handleTitleChange}/>
      <div className="rating-stars" onChange={this.handleRatingChange}>
          <input type="radio" name="rating" value = '1' />
          <input type="radio" name="rating" value = '2' />
          <input type="radio" name="rating" value = '3' />
          <input type="radio" name="rating" value = '4' />
          <input type="radio" name="rating" value = '5' />
      </div>
    <input type="date" value={this.state.date} onChange={this.handleDateChange}/>
    <textarea placeholder="Write review" value={this.state.text} onChange={this.handleTextChange}></textarea>
    <input type="submit" value="Write Review"/>
    </form>

  )
}
}

export default ReviewForm;
