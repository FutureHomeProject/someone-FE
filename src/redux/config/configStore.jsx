import { configureStore } from "@reduxjs/toolkit";
import authorization from "../modules/authorization";

export const store = configureStore({
  reducer : {
    authorization,
  }
})
export default store;