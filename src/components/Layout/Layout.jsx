import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
// import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
