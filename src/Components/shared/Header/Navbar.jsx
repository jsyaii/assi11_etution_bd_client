import { NavLink, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import Logo from "../../Logo/Logo";
import { FaUserLarge } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged Out",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 lg:px-10 xl:px-20">

      {/* LEFT */}
      <div className="navbar-start">
        <Logo />
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <NavLink className="btn btn-ghost" to="/">Home</NavLink>

          {!user && (
            <NavLink className="btn btn-ghost" to="/contract">Contact</NavLink>
          )}
          {!user && (
            <NavLink className="btn btn-ghost" to="/about">About</NavLink>
          )}
          {user && (
            <NavLink className="btn btn-ghost" to="/tutors">Tutors</NavLink>
          )}
          {user && (
            <NavLink className="btn btn-ghost" to="/tuitions">Tuitions</NavLink>
          )}
          {user && (
            <NavLink className="btn btn-ghost" to="/dashboard">Dashboard</NavLink>
          )}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-2">

        <div>

<NavLink
  to="/chat"
  className= {({ isActive }) =>
    `w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all ${isActive ? "bg-[#00bba7] text-black shadow-lg" : "text-gray-300 hover:bg-white/10"}`
  }
>
  <BsChatDots className="text-2xl" />
  <span className="text-lg font-medium">Chat</span>
</NavLink>


</div>

        {/* USER DROPDOWN */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-full">
              {user.photoURL ? (
                <img
                  className="w-9 h-9 rounded-full"
                  src={user.photoURL}
                  alt="profile"
                  title={user.displayName}
                />
              ) : (
                <FaUserLarge />
              )}
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
            >
              <li className="text-center py-2 text-xl font-medium border-b border-gray-600/50">
                {user.displayName}
              </li>

              <li>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="hover:bg-teal-500 hover:text-black justify-center"
                >
                  Dashboard
                </button>
              </li>

              <li>
                <button
                  onClick={handleLogOut}
                  className="hover:bg-red-500/80 hover:text-white justify-center"
                >
                  Logout
                </button>
              </li>
            </ul>



          </div>

          
        ) : (
          <>
            <NavLink className="btn btn-ghost hidden sm:inline-flex" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-ghost hidden sm:inline-flex" to="/register">
              Register
            </NavLink>
          </>
        )}

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            {!user && <NavLink to="/contract">Contact</NavLink>}
            {!user && <NavLink to="/about">About</NavLink>}
            {user && <NavLink to="/tutors">Tutors</NavLink>}
            {user && <NavLink to="/tuitions">Tuitions</NavLink>}
            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
            {!user && <NavLink to="/login">Login</NavLink>}
            {!user && <NavLink to="/register">Register</NavLink>}




          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
