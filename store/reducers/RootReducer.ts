import { combineReducers } from 'redux';
import GratitudeReducer from './GratitudeReducer'

export default combineReducers({
    gratitude: GratitudeReducer
});