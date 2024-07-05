import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        selectedProductId: 0
    },
    reducers: {
        setProductId: (state, action) => {
            state.selectedProductId = action.payload;
        }
    }
});


export const { setProductId } = productSlice.actions;


export default productSlice.reducer;
