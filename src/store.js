import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slice/TaskSlice'

export const store = configureStore({
        devTools: true,
        reducer:{
            task: taskReducer
        }
})