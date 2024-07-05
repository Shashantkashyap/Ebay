import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartLength : 0
}

export const cartSlice = createSlice({
    name : "cartLength",
    initialState,
    reducers:{
        setCartLength :(state, action)=>{
            state.cartLength = action.payload
        }
    }
})

export const {setCartLength} = cartSlice.actions;
export default cartSlice.reducer ;