export const addReview = review => {
    return { 
        type: "ADD_REVIEW",
        payload: review
    }
}

export const removeReview = reviewId => {
    return { 
        type: "REMOVE_REVIEW",
        reviewId
    }
}

// addReview
// deleteReview
//
// Bonus:
//
// updateReview