import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <>
      <div className="d-flex flex-column text-center">
        <h1 className="m-2">Dashboard</h1>
        <h2 className="text-danger">bienvenido {user.name}</h2>
      </div>
    </>
  );
};

export default Dashboard;
