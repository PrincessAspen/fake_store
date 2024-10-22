import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products from '../pages/Products'
import Home from '../pages/Home'
import Layout from '../pages/Layout';
import ProductDetail from '../pages/ProductDetail'
import Categories from '../pages/Categories';
import CategoryProducts from '../pages/CategoryProducts';

const Routes = () => {
    const router = createBrowserRouter([{
        element: <Layout/>,
        children: [{
            path: "/",
            element: <Home/>
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/products/:id",
            element: <ProductDetail />
        },
        {
            path: "/categories",
            element: <Categories />
        },
        {
            path: "/category/:category",
            element: <CategoryProducts />
        }
    ],
    }

    ]);

    return <RouterProvider router={router} />
};

export default Routes;