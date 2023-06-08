import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  //el hook useContext --> me permite acceder al estado del UserContext que definí antes

  console.log(user);

  return (
    <nav className="gap-4 navbar navbar-dark bg-dark p-4 d-flex justify-content-center gap-2 fs-4">
      {!user ? (
        <>
          <NavLink to="/"> Home </NavLink>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => setUser(true)}
          >
            Iniciar sesión
          </button>
        </>
      ) : (
        <>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => setUser(false)}
          >
            Cerrar sesión
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
