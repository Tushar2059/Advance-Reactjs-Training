import { configureStore, createSlice } from "@reduxjs/toolkit";

const firstSlice = createSlice({
    name:"firstStore",
    initialState:{
        title:"Project react",
        message:"Hello react redux"
    },
    reducers:{},
});


const secondSlice = createSlice({
    name:"secondtStore",
    initialState:{
        counter:100
    },
    reducers:{
        incrementCounter: (state)=>
        {
           state.counter +=100;
        },
    },
});

export const {incrementCounter} = secondSlice.actions;

//firstSlice.actions;
const firstStoreReducer =  firstSlice.reducer;


export default configureStore({
    reducer:{firstStore:firstStoreReducer,secondStore:secondSlice.reducer}
});