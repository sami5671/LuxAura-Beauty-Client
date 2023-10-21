import { Link, NavLink } from "react-router-dom";

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
      <NavLink to="/aboutUs">Men's Grooming</NavLink>
    </li>
    <li>
      <NavLink to="/aboutUs">Beauty Tips & Tutorials</NavLink>
    </li>
  </>
);
const NavBar = () => {
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
          <Link to="/login">
            <button className="btn btn-ghost">Login</button>
          </Link>
          {/* checking the user is present(if present the Button will show logout otherwise will show login in the system) */}

          {/* sign in and out */}
        </div>
        {/* Navbar end here  */}
      </section>
    </>
  );
};

export default NavBar;
