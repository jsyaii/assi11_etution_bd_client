// import React from "react";
// import { Link, NavLink, Outlet } from "react-router";
// import useRole from "../hooks/useRole";

// // icons (optional)
// import { FaHome, FaUserCog, FaMoneyCheckAlt, FaClipboardList, FaUsers } from "react-icons/fa";
// import { MdPostAdd } from "react-icons/md";
// import { GiTeacher } from "react-icons/gi";
// import { HiDocumentReport } from "react-icons/hi";
// import { BsFillBriefcaseFill } from "react-icons/bs";

// const DashboardLayout = () => {
//   const { role } = useRole(); // expected: "student" | "tutor" | "admin"

//   return (
//     <div className="drawer lg:drawer-open max-w-7xl mx-auto">
//       <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

//       <div className="drawer-content">
//         {/* Navbar */}
//         <nav className="navbar w-full bg-base-300">
//           <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
//               <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2-2z"></path>
//               <path d="M9 4v16"></path>
//               <path d="M14 10l2 2l-2 2"></path>
//             </svg>
//           </label>

//           <div className="px-4 font-semibold">Tuition Management Dashboard</div>
//         </nav>

//         {/* Page content */}
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>

//       <div className="drawer-side is-drawer-close:overflow-visible">
//         <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

//         <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
//           <ul className="menu w-full grow">

//             {/* Home */}
//             <li>
//               <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
//                 <FaHome />
//                 <span className="is-drawer-close:hidden">Homepage</span>
//               </Link>
//             </li>

//             {/* ✅ STUDENT MENU */}
//             {role === "student" && (
//               <>
//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Tuitions" to="/dashboard/student/my-tuitions">
//                     <FaClipboardList />
//                     <span className="is-drawer-close:hidden">My Tuitions</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Post New Tuition" to="/dashboard/student/post-tuition">
//                     <MdPostAdd />
//                     <span className="is-drawer-close:hidden">Post New Tuition</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Applied Tutors" to="/dashboard/student/applied-tutors">
//                     <GiTeacher />
//                     <span className="is-drawer-close:hidden">Applied Tutors</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Payments" to="/dashboard/student/payments">
//                     <FaMoneyCheckAlt />
//                     <span className="is-drawer-close:hidden">Payments</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile Settings" to="/dashboard/student/profile">
//                     <FaUserCog />
//                     <span className="is-drawer-close:hidden">Profile Settings</span>
//                   </NavLink>
//                 </li>
//               </>
//             )}

//             {/* ✅ TUTOR MENU */}
//             {role === "tutor" && (
//               <>
//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Applications" to="/dashboard/tutor/my-applications">
//                     <FaClipboardList />
//                     <span className="is-drawer-close:hidden">My Applications</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Ongoing Tuitions" to="/dashboard/tutor/ongoing-tuitions">
//                     <BsFillBriefcaseFill />
//                     <span className="is-drawer-close:hidden">Ongoing Tuitions</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Revenue History" to="/dashboard/tutor/revenue-history">
//                     <FaMoneyCheckAlt />
//                     <span className="is-drawer-close:hidden">Revenue History</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile Settings" to="/dashboard/tutor/profile">
//                     <FaUserCog />
//                     <span className="is-drawer-close:hidden">Profile Settings</span>
//                   </NavLink>
//                 </li>
//               </>
//             )}

//             {/* ✅ ADMIN MENU */}
//             {role === "admin" && (
//               <>
//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="User Management" to="/dashboard/admin/users">
//                     <FaUsers />
//                     <span className="is-drawer-close:hidden">User Management</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Tuition Management" to="/dashboard/admin/tuitions">
//                     <FaClipboardList />
//                     <span className="is-drawer-close:hidden">Tuition Management</span>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reports & Analytics" to="/dashboard/admin/reports">
//                     <HiDocumentReport />
//                     <span className="is-drawer-close:hidden">Reports & Analytics</span>
//                   </NavLink>
//                 </li>
//               </>
//             )}

//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
