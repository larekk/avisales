import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import cashReducer from './cashReducer'
import customersReducer from './customersReducer'

const rootReducers = combineReducers({
  cashReducer,
  customersReducer,
})

const store = configureStore({
  reducer: rootReducers,
})

export default store
