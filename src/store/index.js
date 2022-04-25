import { createSlice, configureStore } from "@reduxjs/toolkit";

import uiSlice from "./uiSlice";
import cartSlice from "./cartSlice";

// const initialCartState = {cart:[]}

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: initialCartState,
//     reducers:{
//         addItem(state, action){
//             state.cart.push(action.payload)
//         },
//         removeItem(state){
//             state.cart.pop()
//         }
//     }
// })


const store = configureStore({
    reducer: {cart : cartSlice.reducer, ui:uiSlice.reducer}
})

export default store;