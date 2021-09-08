import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // let restaurant = {
    //   text: this.state.text
    // }
    this.props.addRestaurant(this.state.text)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            onChange={this.handleOnChange} 
            type='text' 
            name='text'
            id='text'
            value={this.state.text}
            placeholder='input restaurant name...'
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
