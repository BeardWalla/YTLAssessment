import { configureStore } from '@reduxjs/toolkit'
import transactionReducer from './reducers/transactionReducer'

export const store = configureStore({
  reducer: {
    transaction: transactionReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch