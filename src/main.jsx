import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
// import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import BrandProduct from "./Components/StoreBrandProducts/BrandProduct";
import BrandProductUpdate from "./Components/StoreBrandProducts/BrandProductUpdate";
import BrandProductDetails from "./Components/StoreBrandProducts/BrandProductDetails";
import MyCart from "./Components/MyCart/MyCart";
import Login from "./Components/Providers/Login";
import Register from "./Components/Providers/Register";
import AuthProvider from "./Components/Providers/AuthProvider";
import PrivateRoute from "./Components/Providers/PrivateRoute";
import MensGrooming from "./Components/ExtraSection/MensGrooming";
import BeautyTips from "./Components/ExtraSection/BeautyTips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // ErrorPage: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brandProduct/:id",
        element: <BrandProduct></BrandProduct>,
        loader: () =>
          fetch(
            "https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/brands"
          ),
      },
      {
        path: "/brandProductUpdate/:id",
        element: <BrandProductUpdate></BrandProductUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/brandProductDetails/:id",
        element: (
          <PrivateRoute>
            <BrandProductDetails></BrandProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/brands/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://luxaura-beauty-server-8k1lzmadi-samis-projects-aa838460.vercel.app/carts"
          ),
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
        path: "/mensgrooming",
        element: <MensGrooming></MensGrooming>,
      },
      {
        path: "/beautytips",
        element: <BeautyTips></BeautyTips>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
