import React, {Component} from 'react';

class ReviewForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: '',
      rating:'',
      date:'',
      text:''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleSubmit(event){
      event.preventDefault();
      const title = this.state.title.trim();
      const rating = this.state.rating.trim();
      const date = this.state.date.trim();
      const text = this.state.text.trim();

      if (!title || !rating || !date || !text){
        return
      }

      this.props.onReviewSubmit({title: title, rating: rating, date: date, text: text})
      this.setState({title: '', rating: '', date: '', text: ''});
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

render(){
  return(
    <form className="review-form" onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Write title" value={this.state.title} onChange={this.handleTitleChange}/>
    <input type="number" min="1" max="5" value={this.state.rating} onChange={this.handleRatingChange}/>
    <input type="date" value={this.state.date} onChange={this.handleDateChange}/>
    <textarea placeholder="Write review" value={this.state.text} onChange={this.handleTextChange}></textarea>
    <input type="submit" value="Write Review"/>
    </form>

  )
}
}

export default ReviewForm;
