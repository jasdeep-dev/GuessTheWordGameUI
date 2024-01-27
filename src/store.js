import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import colorReducer from './colorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
})