// import React from "react";
// import Logo from "../Logo/Logo";
// import { Link, NavLink } from "react-router";
// import useAuth from "../Hooks/useAuth";
// import Swal from "sweetalert2";
// import { FaUserLarge } from "react-icons/fa6";
// import { useNavigate } from "react-router";

import { NavLink, useNavigate } from "react-router";
import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import Logo from "../../Logo/Logo";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged Out",
                    showConfirmButton: false,
                    timer: 1000,
                });
                navigate("/");
            })
            .catch((error) => {
                console.error("error");
            });
    };

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between px-50">
                <div className="">
                    <Logo></Logo>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <NavLink className="btn btn-ghost" to={"/"}>
                            Home
                        </NavLink>
                        <NavLink className="btn btn-ghost" to={"/dashboard"}>
                            Dashboard
                        </NavLink>
                        {!user && (
                            <NavLink className="btn btn-ghost" to={"/contract"}>
                                Contact
                            </NavLink>
                        )}
                        {user && (
                            <NavLink className="btn btn-ghost" to={"/tutors"}>
                                Tutors
                            </NavLink>
                        )}
                        {user && (
                            <NavLink className="btn btn-ghost" to={"/tuitions"}>
                                Tuitions
                            </NavLink>
                        )}
                    </ul>
                </div>

                {user ? (
                    <div className="">
                        <div className="dropdown dropdown-bottom dropdown-center rounded-full flex justify-center items-center ">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost rounded-full "
                            >
                                {user.photoURL ? (
                                    <img
                                        className="w-9 h-9 rounded-full "
                                        src={user.photoURL}
                                        alt="User Profile"
                                        title={user.displayName}
                                    />
                                ) : (
                                    <FaUserLarge />
                                )}
                            </div>

                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">

                                <li className="text-center py-2 text-xl font-medium border-b border-gray-600/50 mb-2">
                                    {user.displayName}</li>

                                <li><a
                                    onClick={() => navigate("/dashboard")}
                                    className="rounded w-full hover:bg-teal-500 hover:text-black flex justify-center">
                                    Dashboard</a></li>

                                <li><button
                                    onClick={handleLogOut}
                                    className="rounded w-full hover:bg-red-500/80 hover:text-white flex justify-center">
                                    Logout</button></li>
                            </ul>

                        </div>
                    </div>
                ) : (
                    <div className="">
                        <NavLink className="btn btn-ghost" to={"/login"}>
                            Login
                        </NavLink>
                        <NavLink className="btn btn-ghost" to={"/register"}>
                            Register
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;








// import { Link, NavLink } from "react-router";
// import useAuth from "../../../hook/useAuth";
// import useRole from "../../../hook/useRole";
// import Logo from "../../Logo/Logo";

// const NavBar = () => {
//   const { user, logOut } = useAuth();
//   const { role, roleLoading } = useRole();

//   const handleLogout = async () => {
//     try {
//       await logOut();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const navLinks = (
//     <>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/tuitions">Tuitions</NavLink></li>
//       <li><NavLink to="/tutors">Tutors</NavLink></li>
//       <li><NavLink to="/about">About</NavLink></li>
//       <li><NavLink to="/contact">Contact</NavLink></li>

//       {/* ✅ STUDENT ONLY */}
//       {!roleLoading && user && role === "student" && (
//         <li>
//           <NavLink to="/dashboard/create-tuition">
//             Create Tuition
//           </NavLink>
//         </li>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow sticky top-0 z-50">
      
//       {/* LEFT */}
//       <div className="navbar-start">
//         <div className="dropdown">
//           <button tabIndex={0} className="btn btn-ghost lg:hidden">
//             ☰
//           </button>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-56">
//             {navLinks}
//             {!user ? (
//               <>
//                 <li><NavLink to="/login">Login</NavLink></li>
//                 <li><NavLink to="/register">Register</NavLink></li>
//               </>
//             ) : (
//               <>
//                 <li><NavLink to="/dashboard">Dashboard</NavLink></li>
//                 <li><button onClick={handleLogout}>Logout</button></li>
//               </>
//             )}
//           </ul>
//         </div>

//         <Link to="/" className="flex items-center gap-2 text-xl font-bold">
//           <Logo />
//           <span className="text-secondary">eTuitionBD</span>
//         </Link>
//       </div>

//       {/* CENTER */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           {navLinks}
//         </ul>
//       </div>

//       {/* RIGHT */}
//       <div className="navbar-end">
//         {!user ? (
//           <>
//             <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
//             <Link to="/register" className="btn btn-primary btn-sm text-white">
//               Register
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link to="/dashboard" className="btn btn-ghost">Dashboard</Link>
//             <button onClick={handleLogout} className="btn btn-primary btn-sm text-white">
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;


