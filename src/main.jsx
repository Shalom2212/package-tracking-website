import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
//import './index.css'

const router = createBrowserRouter([
  {
    path: "/:address",
    element: <App />,
  },
  {
    path: "/",
    element: <h1>Shalom App main js</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
