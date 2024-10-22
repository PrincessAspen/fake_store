import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {product && (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
