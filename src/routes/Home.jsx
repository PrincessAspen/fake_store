import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products?featured=true`);
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <h2>Loading featured products...</h2>;
  }

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Welcome to The Lectro Pawn</h1>
        <p>Your one-stop shop for used and broken electronics at unbelievable prices!</p>
      </header>

      <div className={styles.featuredSection}>
        <h2>Featured Products</h2>
        <div className={styles.productGrid}>
          {featuredProducts.slice(0, 3).map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h3>{product.name}</h3>
              <p className={styles.productPrice}>Price: ${product.price}</p>
              <p className={styles.productDescription}>{product.summary}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Disclaimer: Manolio's 'lectro Pawn is not responsible for any products which do not work. It is also not responsible if you get burned or cut on pieces of products bought from the store.</p>
      </footer>
    </div>
  );
};

export default Home;
