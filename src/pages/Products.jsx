import {useState, useEffect} from 'react'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => console.error('There was an issue fetching the item', error));
    })
    if(loading) {
        return <h2>Loading products...</h2>
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`}>{product.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Products;