import React, { Component } from 'react';
import { connect } from 'react-redux'
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {this.props.restaurants.map( restaurant => (
        <Restaurant 
          key={restaurant.id}
          restaurant={restaurant} 
          removeRestaurant={this.props.removeRestaurant} />
        ))}
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Restaurants);