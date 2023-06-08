import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";




const Navbar = () => {

 
  const {user,setUser} = useUserContext()
  //el hook useContext --> me permite acceder al estado del UserContext que definí antes
  
  console.log(user)

  return (
    <nav className="navbar navbar-dark bg-dark p-4 d-flex justify-content-center gap-2">
    <NavLink to="/"> Home </NavLink>
    {
      user 
      ? <NavLink to="/dashboard">Dashboard</NavLink>
      :<NavLink to="/dashboard">No podes pasar</NavLink>

    }
    
  </nav>
  );
};

export default Navbar;
