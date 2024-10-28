import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
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
          <li key={category.id}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
