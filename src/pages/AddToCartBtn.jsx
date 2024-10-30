import { useCart } from '../CartContext'

const AddToCartBtn = ({ productId }) => {
    const {addToCart} = useCart();

    const handleClick = () => {
        return addToCart(productId);
    };

    return (
    <button type="button" onClick={handleClick}>Add to cart</button>
)};

export default AddToCartBtn;