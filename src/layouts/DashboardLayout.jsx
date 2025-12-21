import { useState } from "react";
import { MdAdminPanelSettings, MdOutlineArrowBackIos, MdOutlineAttachMoney, MdMenu, MdDashboard, MdPieChart, MdBarChart, MdVerified } from "react-icons/md";
import Logo from "../Components/Logo/Logo";
import useAuth from "../hook/useAuth";
import useRole from "../hook/useRole";
import { FaListUl, FaUserGraduate } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router";
import { BiSolidDashboard } from "react-icons/bi";
import { IoAddOutline } from "react-icons/io5";
import { RiGraduationCapFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { PiListDashesFill } from "react-icons/pi";
import { BsCheckAll } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { HiMiniListBullet } from "react-icons/hi2";

const Dashboard = () => {
    const { user } = useAuth();
    const { role } = useRole();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isAdmin = role === "Admin";
    const isTutor = role === "Tutor";
    const isStudent = role === "Student";

    const links = [
        { to: "/dashboard", label: "Dashboard", icon: <BiSolidDashboard className="text-2xl" /> },
        ...(isStudent ? [
            { to: "/dashboard/newtuitions", label: "Add Tuition", icon: <IoAddOutline className="text-3xl" /> },
            { to: "/dashboard/my-tuitions", label: "My Tuitions", icon: <FaListUl className="text-2xl" /> },
            { to: "/dashboard/applicants", label: "Applicants", icon: <RiGraduationCapFill className="text-2xl" /> },
            { to: "/dashboard/my-payments", label: "Payments", icon: <MdOutlineAttachMoney className="text-2xl" /> },
            { to: "/dashboard/profile", label: "Profile", icon: <IoIosSettings className="text-2xl" /> },
        ] : []),
        ...(isTutor ? [
            { to: "/dashboard/applied-tuitions", label: "My Applications", icon: <PiListDashesFill className="text-2xl" /> },
            { to: "/dashboard/approved-tuitions", label: "Ongoing Tuitions", icon: <BsCheckAll className="text-2xl" /> },
            { to: "/dashboard/revenue", label: "Revenue", icon: <RiMoneyDollarCircleLine className="text-2xl" /> },
        ] : []),
        ...(isAdmin ? [
            { to: "/dashboard/admin/manage-users", label: "Manage Users", icon: <FaUsersCog className="text-2xl" /> },
            { to: "/dashboard/admin/manage-tuitions", label: "Manage Applications", icon: <HiMiniListBullet className="text-2xl" /> },
            { to: "/dashboard/admin/verify-tutors", label: "Verify Tutors", icon: <MdVerified className="text-2xl" /> },
            { to: "/dashboard/admin/platform-revenue", label: "Platform Revenue", icon: <MdBarChart className="text-2xl" /> },
            { to: "/dashboard/admin/admin-dashboard", label: "Admin-Dashboard", icon: <MdPieChart className="text-2xl" /> },
        ] : [])
    ];

    return (
        <div className="bg-gradient-to-br from-[#F3E8FF] via-[#E0D7FF] to-[#D9B6FF] min-h-screen">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto h-full">

                {/* Sidebar */}
                <aside className={`fixed md:relative top-0 left-0 z-50 w-64 md:w-80 h-full bg-gradient-to-b from-[#E0D7FF] to-[#D9B6FF] border-r border-[#E0D7FF] transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                    <div className="p-6 md:p-8 text-center border-b border-[#E0D7FF]">
                        <Logo />
                        <h2 className="text-2xl font-bold text-[#3C096C] mt-2">{user?.displayName}</h2>
                        <p className="text-[#3C096C] text-lg mt-1 flex items-center justify-center gap-2">
                            {isAdmin && <><MdAdminPanelSettings /> Admin</>}
                            {isTutor && <><FaUserGraduate /> Tutor</>}
                            {isStudent && <><FaUserGraduate /> Student</>}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3 mt-3 px-3 flex-1 overflow-y-auto">
                        {links.map((link, idx) => (
                            <NavLink
                                key={idx}
                                to={link.to}
                                className={({ isActive }) =>
                                    `w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all font-medium ${isActive ? "bg-[#A78BFA] text-[#3C096C] shadow-lg" : "text-[#3C096C] hover:bg-[#F3E8FF]"}`
                                }
                                onClick={() => setSidebarOpen(false)} // close sidebar on mobile
                            >
                                {link.icon}
                                <span className="text-lg">{link.label}</span>
                            </NavLink>
                        ))}

                        <NavLink
                            to="/"
                            className="w-11/12 mx-auto flex justify-center items-center gap-4 rounded-xl transition-all mb-3 text-[#3C096C] hover:bg-[#F3E8FF] py-3 mt-auto"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <MdOutlineArrowBackIos className="text-2xl" />
                            <span className="text-lg">Back to Home</span>
                        </NavLink>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 w-full p-4 md:p-10 overflow-y-auto relative">
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden fixed top-4 left-4 z-50 bg-[#A78BFA] text-[#3C096C] p-3 rounded-lg shadow-lg"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <MdMenu className="text-2xl" />
                    </button>

                    <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#E0D7FF] min-h-screen p-6 md:p-10">
                        <Outlet />
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Dashboard;
