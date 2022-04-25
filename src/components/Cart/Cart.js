import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';
const Cart = (props) => {

  const cartItem = useSelector((state) => state.cart.item)
  const grandTotalprice = useSelector(state => state.cart.grandtotal)
  // const itemTitle = cartItem.length > 0 ? cartItem.find(item => item.title).title :0
  // const itemDesc = cartItem.length > 0 ? cartItem.find(item => item.description).description :0
  // const price = cartItem.length > 0 ? cartItem.find(item => item.price).price :0
  // const totalPrice = cartItem.length > 0 ? cartItem.reduce((a, b) => a + b.price , 0) : 0

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.length === 0 && <p>Please Add item to Cart</p>}
        {
          cartItem.length > 0 &&
          cartItem.map(item =>
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price
              }}
            />)
        }
      </ul>
      {cartItem.length > 0 && <div style={{ display: 'flex', justifyContent: "space-between" }}> <h1>Total Purchase :</h1> <h1>${grandTotalprice.toFixed(2)}</h1></div>}

    </Card>
  );
};

export default Cart;
