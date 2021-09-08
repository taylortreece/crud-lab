import cuid from 'cuid';

export const manageReviews = (state = [], action) => {
    let review;
    
    switch(action.type) {
        case "ADD_REVIEW":
            review = {
                id: cuid(),
                restaurantId: action.payload.restaurantId,
                text: action.payload.text
            }
            console.log(action)
        return state.concat(review)

        case "REMOVE_REVIEW":
            return state.filter(review => (review.id !== action.reviewId))

        case "REMOVE_RESTAURANT":
            return state.filter(review => (review.restaurantId !== action.restaurantId))
        
        default:
            return state;
    }
}