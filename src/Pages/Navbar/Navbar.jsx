import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo-1.png";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import usrIcon from "../../assets/user.png";

const Navbar = () => {
  const { logOut, user } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Successfully Log Out!!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:px-12 md:px-6 navbar bg-gray-800 text-gray-50 nav">
      <div className="container mx-auto">
        <div className="hidden md:flex ">
          <img src={logo} className="h-20" />
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBars className="text-2xl"></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-5 space-y-3 shadow bg-base-200 text-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="px-1 flex gap-10">{navLink}</ul>
        </div>

        <div className="navbar-end flex items-center">
          <label tabIndex={0} className="btn btn-ghost avatar">
            <div className="">
              {user ? (
                <div className="flex gap-4 items-center">
                  <p>{user?.displayName}</p>
                  <div className="w-10 rounded-full border">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              ) : (
                <div className="w-10 rounded-full border">
                    <img src={usrIcon} />
                  </div>
              )}
            </div>
          </label>

          <div className="ml-5">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-error btn-outline"
                to={"/login"}
              >
                Logout
              </button>
            ) : (
              <Link className="btn btn-error btn-outline" to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
