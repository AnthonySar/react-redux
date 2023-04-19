import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bikeReducer from './bike/reducerBike';
import macbookReducer from './macbook/reducerMacbook';
import commentsReducer from './comments/reducerComments';

const reducer = combineReducers({
  reducerBike: bikeReducer,
  reducerMacbook: macbookReducer,
  reducerComments: commentsReducer
})

// Dans cette nouvelle configuration
// Le thunk middleware est automatiquement ajouté
// Nécessaire qu'avec le createStore - Dépréciée depuis la dernière maj
const store = configureStore({
  reducer
})

export default store;