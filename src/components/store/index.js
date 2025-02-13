import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import checkboxesReducer from './checkboxReducer'
import tabsReducer from './tabsReducer'
import ticketsReducer from './ticketsReducer'

const rootReducer = combineReducers({
  tabs: tabsReducer,
  checkboxes: checkboxesReducer,
  tickets: ticketsReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
