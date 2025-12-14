

import { Link, NavLink } from "react-router";
import useAuth from "../../../hook/useAuth";
import Logo from "../../Logo/Logo";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    // ✅ logout can be async; catch error to avoid silent failure
    logOut()
      .then(() => {
        // optional: you can navigate("/") if you want
        console.log("Logged out successfully");
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/tuitions">Tuitions</NavLink></li>
      <li><NavLink to="/tutors">Tutors</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>
  );

  return (
    // ✅ Sticky navbar with DaisyUI
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* LEFT SECTION */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-56"
          >
            {navLinks}

            {/* ✅ Mobile auth-based navigation */}
            {!user ? (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </div>

        {/* ✅ Logo + Website Name */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Logo />
          <span className="text-secondary">eTuitionBD</span>
        </Link>
      </div>

      {/* CENTER LINKS (DESKTOP) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* RIGHT SECTION */}
      <div className="navbar-end flex items-center gap-3">
        {!user ? (
          // ✅ If logged out: Login / Register
          <>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm text-white">
              Register
            </Link>
          </>
        ) : (
          // ✅ If logged in: Dashboard + Profile dropdown
          <>
           

            {/* ✅ Profile dropdown */}
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost flex items-center gap-2">
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary ring-offset-2">
                    <img
                      src={user?.photoURL || "/default-avatar.png"}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* ✅ show display name (fallback to email prefix) */}
                <span className="hidden md:inline">
                  {user?.displayName || user?.email?.split("@")[0] || "User"}
                </span>
              </button>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
               
              </ul>
               
            </div>
            <div>
              <button onClick={handleLogout} className="btn btn-primary btn-sm text-white flex">Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
