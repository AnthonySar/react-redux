import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bikeReducer from './bike/reducerBike';
import macbookReducer from './macbook/reducerMacbook';

const reducer = combineReducers({
  reducerBike: bikeReducer,
  reducerMacbook: macbookReducer
})

const store = configureStore({
  reducer
})

export default store;