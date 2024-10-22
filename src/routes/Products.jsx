import {useState, useEffect} from 'react'
import {useLoaderData, Link} from 'react-router-dom'
import styles from './Products.module.css'

export const loader = async () => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/products`;

    const data = await fetch(apiUrl).then(response => response.json());
    return data;
}


const Products = () => {
    const products = useLoaderData();
    console.log('PRODUCTS PLEASE?? :', products);


    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setProducts(data);
    //         setLoading(false);
    //     })
    //     .catch((error) => console.error('There was an issue fetching the item', error));
    // })
    // if(loading) {
    //     return <h2>Loading products...</h2>
    // }

    return (
        <div className={styles.container}>
            <h1>Products</h1>
            <ul className={styles.productList}>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>View Product Details</Link>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                        <p className={styles.productTitle}>{product.title}</p>
                        <p className={styles.productPrice}>${product.price}</p>
                        {/* <a href={`/products/${product.id}`}>{product.title}</a> */}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Products;