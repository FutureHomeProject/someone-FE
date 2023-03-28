//houseSlice.jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const __getHousesThunk = createAsyncThunk('GET_HOUSES', async (_, thunkAPI) => {
  try {
    console.log('data', data)
    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_KEY}/houses`)
    return thunkAPI.fulfillWithValue(data)
  } catch (e) {
    return thunkAPI.rejectWithValue(e.code)
  }
})
const initialState = {
  houses: [],
  error: null,
  isLoading: false,
  isSuccess: false,
}
export const houseSlice = createSlice({
  name: 'houses',
  initialState,
  reducer: {},
  extraReducer: {
    [__getHousesThunk.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHousesThunk.fulfilled]: (state, action) => {
      state.isLoading = false
      state.houses = action.payload
    },
    [__getHousesThunk.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {} = houseSlice.actions
export default houseSlice.reducer
