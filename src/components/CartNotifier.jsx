import {Outlet, NavLink, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import styles from './CartNotifier.module.css'
import CartIcon from '../Images/CartIcon.png'

const CartNotifier = () => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems } = useCart();

  useEffect(() => {
    const getQuantity = () => {
      return cartItems.reduce((acc, current) => {
        return acc + current.quantity;
      }, 0);
    };
    setQuantity(getQuantity)
  }, [cartItems]);

  return <NavLink to="/cart" className={styles.cart}>
    <img src={CartIcon} className={styles.cartIcon}/>
    <span>{quantity}</span>
  </NavLink>
};

export default CartNotifier;