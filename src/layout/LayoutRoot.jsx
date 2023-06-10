import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <Outlet />
      </div>

      <footer className="d-flex justify-content-center bg-dark p-2 text-white">
        <h1>Footer Layout Root</h1>
      </footer>
    </>
  );
};

export default LayoutRoot;
