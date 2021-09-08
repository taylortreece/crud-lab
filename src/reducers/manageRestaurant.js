import cuid from 'cuid';

export const manageRestaurants = (state = [], action) => {
    let restaurant;
    
    switch(action.type) {
        case "ADD_RESTAURANT":
            restaurant = {
                id: cuid(),
                text: action.payload.text
            }
        return state.concat(restaurant)

        case "REMOVE_RESTAURANT":
            return state.filter(restaurant => (restaurant.id !== action.restaurantId))
        
        default:
            return state;
    }
}