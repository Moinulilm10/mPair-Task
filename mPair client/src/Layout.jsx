import { Outlet } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Sidebar from "./components/shared/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
