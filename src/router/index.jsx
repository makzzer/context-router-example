//en este archivo exporto una variable que se llame router donde configuro las rutas que va a tener la app

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutRoot from "../layout/LayoutRoot";
import NotFound from "../pages/NotFound";
import LayoutPrivate from "../layout/LayoutPrivate";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
