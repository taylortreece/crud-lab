export const addRestaurant = text => {
    return { 
        type: "ADD_RESTAURANT",
        text: text
    }
}

export const removeRestaurant = restaurantId => {
    return { 
        type: "REMOVE_RESTAURANT",
        restaurantId: restaurantId
    }
}

// addRestaurant
// deleteRestaurant
//
// Bonus:
//
// updateRestaurant