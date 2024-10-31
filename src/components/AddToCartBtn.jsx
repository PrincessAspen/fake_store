import { useCart } from '../CartContext'
import styles from './AddToCartBtn.module.css'

const AddToCartBtn = ({ product }) => {
    const {addToCart} = useCart();

    const handleClick = () => {
        return addToCart(product);
    };

    return (
    <button type="button" onClick={handleClick} className={styles.funButton}>Add to cart</button>
)};

export default AddToCartBtn;