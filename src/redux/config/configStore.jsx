import { configureStore } from '@reduxjs/toolkit'
import authorization from '../modules/authorization'
import houses from '../modules/houseSlice'

export const store = configureStore({
  reducer: {
    authorization,
    houses,
  },
})
export default store
