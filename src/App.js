import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import {sendCartData, fetchCartData} from './store/cart-action'

// Component based thunks Action
// import { uiAction } from './store/uiSlice';

let initialCart = true

function App() {
  const dispatch = useDispatch()
  const displayCart = useSelector(state => state.ui.cartIsVisible)
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    // ----------- Start of Component Based Thunks Action ------------
    // const sendCartData = async () => {
    //   dispatch(
    //     uiAction.showNotification({
    //       status: "pending",
    //       title: "Sending Data.",
    //       message: "Sending data to server...."
    //     })
    //   )

    //   const response = await fetch("https://redux-http-53958-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   })


    //   dispatch(
    //     uiAction.showNotification({
    //       status: "success",
    //       title: "Success",
    //       message: "Sending data is successfully retrieved by server"
    //     })
    //   )
    // }

    // sendCartData().catch(error => {
    //   dispatch(
    //     uiAction.showNotification({
    //       status: "failed",
    //       title: "Failed",
    //       message: "Failed to sending data to server!"
    //     })
    //   )
    // })
    // ----------- End of Component Based Thunks Action ------------


    
    if (initialCart) {
      initialCart = false
      return
    }
    
    if(cart.cartChange){
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])


  return (
    <>
      {notification && <Notification
        title={notification.title}
        message={notification.message}
        status={notification.status}
      />}
      <Layout>
        {displayCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
