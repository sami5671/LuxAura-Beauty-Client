import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
// import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import BrandProduct from "./Components/StoreBrandProducts/BrandProduct";

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
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
