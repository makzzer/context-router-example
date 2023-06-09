import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  //el hook useContext --> me permite acceder al estado del UserContext que definí antes

  const navigate = useNavigate();

  //manejo el redireccionamiento desde el LayoutPrivate
  const cerrarSesion = () => {
    setUser(false);
    //navigate("/");

    //console.log("el navbaarrr" + user);
  };

  const iniciarSesion = () => {
    setUser(true);
    navigate("/dashboard");
  };

  //console.log("iniciar sesion" + user);

  return (
    <nav className="gap-4 navbar navbar-dark bg-dark p-4 d-flex justify-content-center gap-2 fs-4">
      {!user ? (
        <>
          <NavLink to="/"> Home </NavLink>
          <button className="btn btn-warning btn-sm" onClick={iniciarSesion}>
            Iniciar sesión
          </button>
        </>
      ) : (
        <>
          <NavLink to="/"> Home </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
