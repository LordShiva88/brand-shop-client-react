import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Products from "../Pages/Products/Products";
import Details from "../Components/Details/Details";
import Update from "../Components/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => 
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
    ],
  },
]);

export default router;

// https://brand-shop-68273.web.app/details/652f87782755bb4ef7789e48

// https://shop-server-site-36ob4qzsf-liton-naths-projects.vercel.app/products
