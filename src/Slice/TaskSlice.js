import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const taskSlice = createSlice({

        name:'Tasksearch',
        initialState,
        reducers:{
            Task(state,action){
                state.push(action.payload)
            }
        }
})

export const {Task}= taskSlice.actions

export default taskSlice.reducer