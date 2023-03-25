import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";


export const __postsignup = createAsyncThunk(
  "signup",
  async(payload, thunkAPI) => {
    try{
      console.log(payload);
      // const data = await api.post(`/users/login`, payload)
      const data = await axios.post(`http://localhost:4000/signup`, payload)
      console.log(data);
    } 
    catch (error) {
      console.log(error.response)
    }
  }
)

export const __postsignin = createAsyncThunk(
  "signin",
  async(payload, thunkAPI) => {
    try{
      console.log(payload);
      // const data = await api.post(`/users/login`, payload)
      const data = await axios.post(`http://localhost:4000/signup`, payload)
      const cookies = new Cookies;
      cookies.set('token', data.status)
      console.log(data.status);
    } 
    catch (error) {
      console.log(error.response)
    }
  }
)

const initialState = {
  isLoding : false,
  isError:false,
  error:null
}

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  extraReducers : {
    // register
    [__postsignup.pending]:(state,action) => {
      state.isLodaing = true;
      state.isError = false;
    },
    [__postsignup.fulfilled]:(state,action) =>{
      state.isLodaing = false;
      state.isError = false;
    },
    [__postsignup.rejected]:(state,action) => {
      state.isLodaing = false;
      state.isError = true;
    },

  }
})

export default authorizationSlice.reducer