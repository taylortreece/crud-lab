import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => (
          <Review 
            removeReview={this.props.removeReview}
            key={review.id}
            review={review}
          />
        ))}
      </ul>
    );
  }
};

export default Reviews;