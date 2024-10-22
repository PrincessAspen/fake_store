import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData} from 'react-router-dom';
import styles from './ProductDetail.module.css'

export const loader = async ({ params }) => {
  const { id } = params;
  const apiUrl = `${import.meta.env.VITE_API_URL}/products/${id}`
  const data = await fetch(apiUrl).then((response) => response.json());
  return data
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (loading) {
    return <h2>Loading product details...</h2>;
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailCard}>
        {product && (
          <>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productPrice}>${product.price}</p>
            <p className={styles.productDescription}>{product.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
