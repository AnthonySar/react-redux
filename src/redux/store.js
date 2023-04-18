import bikeReducer from './bike/reducerBike';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  bike: bikeReducer,
})

const store = configureStore({
  reducer
})

export default store;