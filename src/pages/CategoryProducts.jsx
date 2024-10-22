import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <h1>Products in {category}</h1>
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

export default CategoryProducts;
