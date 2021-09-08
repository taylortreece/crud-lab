import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    let review = {
      restaurantId: this.state.restaurantId,
      text: this.state.text
    }

    this.props.addReview(review)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
          onChange={this.handleOnChange} 
          type="text" 
          name="text" 
          placeholder="input review content..."
          value={this.state.text}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
