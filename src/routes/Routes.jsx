import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products from '../pages/Products'
import Home from '../pages/Home'
import Layout from '../pages/Layout';

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
    ],
    }

    ]);

    return <RouterProvider router={router} />
};

export default Routes;