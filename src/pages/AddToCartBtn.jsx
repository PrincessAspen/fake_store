import { useCart } from '../CartContext'

const AddToCartBtn = ({ product }) => {
    const {addToCart} = useCart();

    const handleClick = () => {
        return addToCart(product);
    };

    return (
    <button type="button" onClick={handleClick}>Add to cart</button>
)};

export default AddToCartBtn;