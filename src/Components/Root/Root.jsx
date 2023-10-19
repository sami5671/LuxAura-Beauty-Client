import NavBar from "../Home/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
