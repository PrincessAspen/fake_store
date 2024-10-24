import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Products, {loader as productsLoader} from './Products'
import Home from './Home'
import Layout from '../pages/Layout';
import ProductDetail, {loader as productDetailLoader } from './ProductDetail'
import Categories from './Categories';
import CategoryProducts from './CategoryProducts';
import ErrorPage from '../pages/Error';
import Registration, {action as registrationAction} from './Registration'

const Routes = () => {
    const router = createBrowserRouter([{
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
            }]
        }

    ]);

    return <RouterProvider router={router} />
};

export default Routes;