import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './CategoryProducts.module.css';
import AddToCartBtn from '../components/AddToCartBtn';

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/category-products/${category}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Category not found');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products for category:', error);
        setLoading(false);
      });
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
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <p className={styles.productTitle}>{product.name}</p>
            <p className={styles.productPrice}>${product.price}</p>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
              View Details
            </Link>
            <AddToCartBtn product={product} className={styles.productLink} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
