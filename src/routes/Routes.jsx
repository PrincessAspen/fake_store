import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products, {loader as productsLoader} from './Products'
import Home from './Home'
import Layout from '../pages/Layout';
import ProtectedLayout from '../pages/ProtectedLayout'
import ErrorPage from '../pages/Error';
import ProductDetail, {loader as productDetailLoader } from './ProductDetail'
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import Registration, {action as registrationAction} from './Registration'
import Login, { action as loginAction} from './Login';
import CartPage from './Cart'
import Dashboard, { action as dashboardAction } from './Dashboard';

const Routes = () => {
    const publicRoutes = [{
        element: <Layout/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products />,
                loader: productsLoader
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
                loader: productDetailLoader
            },
            {
                path: "/categories",
                element: <Categories />
            },
            {
                path: "/category/:category",
                element: <CategoryProducts />
            },
            {
                path: '/registration',
                element: <Registration />,
                action: registrationAction
            },
            {
                path: '/login',
                element: <Login />,
                action: loginAction
            },
            {
                path: '/cart',
                element: <CartPage />
            }]
        }

    ];

    //This should set up routes the average unauthenticated user can't access

    const protectedRoutes = [
        {
            element: <ProtectedLayout />,
            children: [
                {
                    path: "/dashboard",
                    element: <Dashboard />,
                    action: dashboardAction
                }
            ]
        }
    ]

    const router = createBrowserRouter([...publicRoutes, ...protectedRoutes])

    return <RouterProvider router={router} />
};

export default Routes;