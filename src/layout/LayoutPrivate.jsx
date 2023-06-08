
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

const LayoutPrivate = () => {


  const {user, setUser} = useUserContext()
  const navigate = useNavigate()

  useEffect (()=>{
    !user
    && navigate("/")
  },[user])





  return <Outlet />;
};

export default LayoutPrivate;
