import { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import styles from './CartNotifier.module.css'

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

  return <p className={styles.cart}>{quantity} Items in Cart</p>;
};

export default CartNotifier;