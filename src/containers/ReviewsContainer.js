import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, removeReview } from '../actions/reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews removeReview={this.props.removeReview} reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, { addReview, removeReview })(ReviewsContainer);
