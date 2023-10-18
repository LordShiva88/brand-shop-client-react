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

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/cart',
        element: <MyCart></MyCart>,
        loader: ()=> fetch('http://localhost:5000/storedItem')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/products/:id',
        element: <Products></Products>,
        loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
    ]
  }
]);

export default router;


// https://brand-shop-68273.web.app/details/652f87782755bb4ef7789e48

// https://shop-server-site-36ob4qzsf-liton-naths-projects.vercel.app/products