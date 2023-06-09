import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutPrivate = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  //acá controlo todo el tiempo si user esta en false, si no esta en true no pasa de layout
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return <Outlet />;
};

export default LayoutPrivate;
