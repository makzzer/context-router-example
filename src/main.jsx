import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

//tengo que envolver toda mi aplicacion en </UserProvider> , al menos porque eso contiene las paginas que necesitan 
//acceder al element compartido, en este caso el estado del usuario logueado
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
