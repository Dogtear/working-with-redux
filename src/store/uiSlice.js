import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null, notificationVisible:false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action) {
            state.notification = {
                title : action.payload.title,
                message: action.payload.message,
                status : action.payload.status,
            }
        },
        toggleNotification(state) {
            state.notificationVisible = !state.notificationVisible
        },
    }
})


export const uiAction = uiSlice.actions;


export default uiSlice