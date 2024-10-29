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
          <h1 className={styles.header}>Our Products</h1>
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <h2 className={styles.productTitle}>{product.name}</h2>
                  <p className={styles.productPrice}>${product.price}</p>
                  <Link to={`/products/${product.id}`} className={styles.productLink}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      

};

export default Products;