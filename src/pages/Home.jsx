import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useUserContext();

  //hook de react para poder definir una navegacion despues del login
  const navigate = useNavigate();

  //alias iniciarSesion
  const handleLogin = () => {
    //primero cambio el usuario a true, osea logueado
    setUser(true);

    //despues redirijo al usuario al dashboard despues de loguearse
    navigate("/dashboard");
   // console.log("handlelogin" + user);
  };

  return (
    <>
      <div className="m-2 d-flex gap-3">
        <h1 className="">Home</h1>
        {!user && (
          <>
            <button className="btn btn-dark" onClick={handleLogin}>
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
