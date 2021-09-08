import { combineReducers } from 'redux'
import {manageRestaurants} from './manageRestaurant'
import {manageReviews} from './manageReview'

export const rootReducer = () => { 
    return combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
    })
}

// export const rootReducer = combineReducers({
//     restaurants: manageRestaurants,
//     reviews: manageReviews
// })