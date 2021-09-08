import { combineReducers } from 'redux'
import {manageRestaurants} from './manageRestaurant'
import {manageReviews} from './manageReview'

export const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})