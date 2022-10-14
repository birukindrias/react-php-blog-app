import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./userSlice";


export const store = configureStore({
    reducer:{
        user_slice: user_slice.reducer
    }
})