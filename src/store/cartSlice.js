import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: [],
        totalquantity: 0,
        grandtotal: 0,
        cartChange:false,
    },
    reducers: {
        replaceCart(state, action){
            state.item = action.payload.item
            state.totalquantity = action.payload.totalquantity
            state.grandtotal = action.payload.grandtotal
        },
        addItemToCart(state, action) {
            const newItem = action.payload
            const itemExist = state.item.find(item => item.id === newItem.id)
            state.cartChange = true
            if (!itemExist) {
                state.item.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }
            else {
                itemExist.quantity++
                itemExist.totalPrice = itemExist.totalPrice + newItem.price
            }
            state.totalquantity = state.item.reduce((accumulator, item) => accumulator + item.quantity, 0)
            state.grandtotal = state.item.reduce((accumulator, item) => accumulator + item.totalPrice, 0)
        },

        removeItemFromCart(state, action) {
            const itemExist = state.item.find(item => item.id === action.payload)
            state.cartChange = true
            if (itemExist.quantity > 1) {
                itemExist.quantity--
                itemExist.totalPrice = itemExist.totalPrice - itemExist.price
            }
            else {
                state.item = state.item.filter(item => item.id !== action.payload)
            }
            state.totalquantity--
            state.grandtotal = state.item.reduce((accumulator, item) => accumulator + item.totalPrice, 0)
        }
    }
})



export const cartAction = cartSlice.actions

export default cartSlice