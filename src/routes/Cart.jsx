import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    return(
        <>
            <h1>This is where the cart goes</h1>
        </>
    )
}