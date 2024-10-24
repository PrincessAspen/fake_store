import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  if (loading) {
    return <h2>Loading categories...</h2>;
  }

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
