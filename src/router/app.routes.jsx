import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";
import ProtectedLayout from "../layout/ProtectedLayout";
import Products from "../modules/products/Products";
import CreateProducts from "../modules/products/CreateProducts";
import Profile from "../modules/profile/Profile";
import ProductDetails from "../modules/products/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {
                path:'',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
    },
    {
        path:'/main',
        element:<ProtectedLayout/>,
        children:[
            {
                path:'',
                element:<Products/>
            },
            {
                path:'create',
                element:<CreateProducts/>
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            }
        ]
    }
])

export default router