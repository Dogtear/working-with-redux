import { uiAction } from "./uiSlice"
import { cartAction } from "./cartSlice"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchHttpRequest = async () => {
            const response = await fetch("https://redux-http-53958-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json")

            if (!response) {
                throw new Error("Fetchinng cart data failed.")
            }
            const data = response.json()

            return data
        }
        try {
            const fetchDataResult = await fetchHttpRequest()
            dispatch(cartAction.replaceCart({
                item: fetchDataResult.item || [],
                totalquantity: fetchDataResult.totalquantity,
                grandtotal: fetchDataResult.grandtotal
            }))
        }
        catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: "failed",
                    title: "Failed",
                    message: "Failed to Fetching data from server!"
                })
            )
        }
    }
}


export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(
            uiAction.showNotification({
                status: "pending",
                title: "Sending Data.",
                message: "Sending data to server...."
            })
        )
        const sendHttpRequest = async () => {
            const response = await fetch("https://redux-http-53958-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
                method: "PUT",
                body: JSON.stringify({
                    item: cartData.item,
                    totalquantity: cartData.totalquantity,
                    grandtotal: cartData.grandtotal,
                }),
            })
            if (!response) {
                throw new Error("Sending cart data failed.")
            }
        }

        try {
            await sendHttpRequest()

            dispatch(
                uiAction.showNotification({
                    status: "success",
                    title: "Success",
                    message: "Sending data is successfully retrieved by server"
                })
            )
        }
        catch (error) {
            dispatch(
                uiAction.showNotification({
                    status: "failed",
                    title: "Failed",
                    message: "Failed to sending data to server!"
                })
            )
        }
    }
}