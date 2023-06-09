import { useUserContext } from "../context/UserContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  //acá controlo todo el tiempo si user esta en false, si no esta en true no pasa de layout

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
