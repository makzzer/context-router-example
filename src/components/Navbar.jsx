import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";




const Navbar = () => {

 
  const {user,setUser} = useUserContext
  //el hook useContext --> me permite acceder al estado del UserContext que definí antes
  console.log(useUserContext)

  return (
    <nav className="navbar navbar-dark bg-dark p-4 d-flex justify-content-center gap-2">
    <NavLink to="/"> Home </NavLink>
    {

    }
    <NavLink to="/dashboard">Dashboard</NavLink>
  </nav>
  );
};

export default Navbar;
