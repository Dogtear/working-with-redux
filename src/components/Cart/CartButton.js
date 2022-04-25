import classes from './CartButton.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { uiAction } from '../../store/uiSlice';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cartCount = useSelector((state) => state.cart.totalquantity)


  const displayCartHandler = () =>{
    dispatch(uiAction.toggle())
  }

  return (
    <button className={classes.button} onClick={displayCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
