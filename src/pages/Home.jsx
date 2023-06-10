import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useUserContext();

  //hook de react para poder definir una navegacion despues del login
  const navigate = useNavigate();

  //alias iniciarSesion
  const handleLogin = () => {
    //primero cambio el usuario a true, osea logueado
    setUser({
      name: "makzzzzer",
      email: "makzofx@gmail.com",
    });

    //despues redirijo al usuario al dashboard despues de loguearse
    navigate("/dashboard");
    // console.log("handlelogin" + user);
  };

  return (
    <>
      <div className="m-2 d-flex gap-3 min-h-100vw flex-column justify-items-center text-center ">
        <h1 className="">Home</h1>
        {!user && (
          <>
            <button className="btn btn-dark d-none" onClick={handleLogin}>
              Login
            </button>
          </>
        )}

        <div className="d-flex container bg-warning p-4 fs-1">
          <h1>
            Por Favor presioná el botón superior de <p className="fs-1 text-danger pb-0 mb-0 ">Iniciar sesión</p> para simular un logueo de usuario y y
            así visualizar el dashboard
          </h1>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
