import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";
import userPicture from "../../assets/userpic.jpg";

const NavBar = () => {
  // destructure the AuthContext
  const { user, logout } = useContext(AuthContext);
  // =================================================================
  // ==========================For Logging out =================================================
  const handleLogout = () => {
    logout()
      .then(() => {
        swal({
          text: "Successfully Registered",
        });
      })
      .catch((error) => {
        console.error(error);
        swal({
          text: ("Have some issues", error.message),
        });
      });
  };
  // =================================================================
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/mensgrooming">Men's Grooming</NavLink>
      </li>
      <li>
        <NavLink to="/beautytips">Beauty Tips & Tutorials</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* navbar start here */}
      <section className="container mx-auto font-rancho">
        <div className="navbar">
          <div className="navbar-start lg:mr-4">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="flex text-center items-center">
              <img
                className="w-1/2 lg:w-1/6 rounded-lg"
                src="https://imgur.com/23sHeF7.png"
                alt=""
              />
              <p className="lg:text-2xl text-pink-400 font-bold">LuxAura</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 gap-6">{links}</ul>
          </div>

          {/* sign in and out */}

          {/* checking the user is present(if present the Button will show logout otherwise will show login in the system) */}
          {user ? (
            <>
              <div>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-6 lg:w-10 rounded-full">
                    <img src={user.photoURL || userPicture} alt="" />
                  </div>
                </label>
              </div>
              <div className="hidden lg:block">
                <span>{user.displayName || user.email}</span>
              </div>

              <button onClick={handleLogout} className="btn btn-ghost">
                LOG OUT
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn font-bold">LOGIN HERE</button>
            </Link>
          )}
          {/* sign in and out */}
        </div>
        {/* Navbar end here  */}
      </section>
    </>
  );
};

export default NavBar;
