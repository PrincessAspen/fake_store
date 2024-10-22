import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CategoryProducts.module.css'; // Import the CSS module

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching products for category:', error));
  }, [category]);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (
    <div className={styles.categoryProductsContainer}>
      <h1>Products in {category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <p className={styles.productTitle}>{product.title}</p>
            <p className={styles.productPrice}>${product.price}</p>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
