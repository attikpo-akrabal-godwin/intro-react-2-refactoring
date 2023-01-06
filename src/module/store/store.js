import { configureStore } from "@reduxjs/toolkit";
import { coursSlice } from "../slice/coursSlice";

export const store = configureStore({
    reducer:{
       coursSlice:coursSlice.reducer
    }
})