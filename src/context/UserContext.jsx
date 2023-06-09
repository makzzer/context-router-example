//acá voy a incluir todos los elementos que necesito compartir por diferentes paginas

import { createContext, useContext, useState } from "react";

//creo el objeto que voy a compartir entre todos mis componentes
export const UserContext = createContext();

//configuro un provider que lo voy a usar para que los demas componentes modifiquen el objeto que crée antes
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/*el siguiente children me va a representar a todas las paginas que necesiten acceder a mi objeto UserContext*/}
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

//voy a crear un mini hook para poder usar este useContext y poder desestructurarlo en otros componentes para acceder al user y setUser
// , ejemplo: const {user,setUser} = useUserContext()

export const useUserContext = () => useContext(UserContext);

//Guía Blueeweb de useContext / ContextAPI

//https://bluuweb.dev/05-react/06-context-auth.html
