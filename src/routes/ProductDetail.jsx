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
  const product = useLoaderData();

  return (
    <div className={styles.productDetail}>
      <div className={styles.productDetailCard}>
        {product && (
          <>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h1 className={styles.productTitle}>{product.name}</h1>
            <p className={styles.productPrice}>${product.price}</p>
            <p className={styles.productDescription}>{product.summary}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
