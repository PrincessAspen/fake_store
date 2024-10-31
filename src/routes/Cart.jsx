import { useCart } from '../CartContext';
import styles from './Cart.module.css'

const CartPage = () => {
    const { cartItems } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, { product, quantity }) => {
            return total + (product.price * quantity);
        }, 0).toFixed(2);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Your Cart</h1>
            <div className={styles.itemGrid}>
                {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className={styles.itemCard}>
                        <img src={product.image} alt={product.name} className={styles.itemImage} />
                        <div className={styles.itemInfo}>
                            <h2 className={styles.itemTitle}>{product.name}</h2>
                            <p className={styles.itemPrice}>${product.price}</p>
                            <p className={styles.itemQuantity}>Quantity: {quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h2>Total Price:</h2>
                <p>${calculateTotal()}</p>
            </div>
        </div>
    );
};

export default CartPage;