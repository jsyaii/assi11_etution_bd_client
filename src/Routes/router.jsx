import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import HomeLayouts from "../layouts/HomeLayouts";
import LogIn from "../pages/Auth/LogIn/LogIn";
import Register from "../pages/Auth/Register/Register";
import AuthLayout from "../layouts/AuthLayouts";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
index:true,
Component: HomeLayouts
        }, 


{
path: "/",
Component: AuthLayout,
    children:[
{

path:"/login",
Component: LogIn,

},
{

path:"/register",
Component: Register,

}
    ]
},



// DASHBOARD AND PROTECTED ROUTES

// {
//   path: "/dashboard",
//   element: (
//     <PrivateRoute>
//       <DashboardLayout />
//     </PrivateRoute>
//   ),
//   children: [
//     // ✅ Role landing routes (dashboard home)
//     // {
//     //   path: "student",
//     //   element: (
//     //     <StudentRoute>
//     //       <StudentDashboard />
//     //     </StudentRoute>
//     //   ),
//     // },
//     // {
//     //   path: "tutor",
//     //   element: (
//     //     <TutorRoute>
//     //       <TutorDashboard />
//     //     </TutorRoute>
//     //   ),
//     // },
//     // {
//     //   path: "admin",
//     //   element: (
//     //     <AdminRoute>
//     //       <AdminDashboard />
//     //     </AdminRoute>
//     //   ),
//     // },

//     // // ✅ STUDENT pages
//     // {
//     //   path: "student/my-tuitions",
//     //   element: (
//     //     <StudentRoute>
//     //       <MyTuitions />
//     //     </StudentRoute>
//     //   ),
//     // },
//     // {
//     //   path: "student/post-tuition",
//     //   element: (
//     //     <StudentRoute>
//     //       <PostTuition />
//     //     </StudentRoute>
//     //   ),
//     // },
//     // {
//     //   path: "student/applied-tutors",
//     //   element: (
//     //     <StudentRoute>
//     //       <AppliedTutors />
//     //     </StudentRoute>
//     //   ),
//     // },
//     // {
//     //   path: "student/payments",
//     //   element: (
//     //     <StudentRoute>
//     //       <StudentPayments />
//     //     </StudentRoute>
//     //   ),
//     // },
//     // {
//     //   path: "student/profile",
//     //   element: (
//     //     <StudentRoute>
//     //       <StudentProfile />
//     //     </StudentRoute>
//     //   ),
//     // },

//     // // ✅ TUTOR pages
//     // {
//     //   path: "tutor/my-applications",
//     //   element: (
//     //     <TutorRoute>
//     //       <MyApplications />
//     //     </TutorRoute>
//     //   ),
//     // },
//     // {
//     //   path: "tutor/ongoing-tuitions",
//     //   element: (
//     //     <TutorRoute>
//     //       <OngoingTuitions />
//     //     </TutorRoute>
//     //   ),
//     // },
//     // {
//     //   path: "tutor/revenue-history",
//     //   element: (
//     //     <TutorRoute>
//     //       <RevenueHistory />
//     //     </TutorRoute>
//     //   ),
//     // },
//     // {
//     //   path: "tutor/profile",
//     //   element: (
//     //     <TutorRoute>
//     //       <TutorProfile />
//     //     </TutorRoute>
//     //   ),
//     // },

//     // // ✅ ADMIN pages
//     // {
//     //   path: "admin/users",
//     //   element: (
//     //     <AdminRoute>
//     //       <UserManagement />
//     //     </AdminRoute>
//     //   ),
//     // },
//     // {
//     //   path: "admin/tuitions",
//     //   element: (
//     //     <AdminRoute>
//     //       <TuitionManagement />
//     //     </AdminRoute>
//     //   ),
//     // },
//     // {
//     //   path: "admin/reports",
//     //   element: (
//     //     <AdminRoute>
//     //       <ReportsAnalytics />
//     //     </AdminRoute>
//     //   ),
//     // },
//   ],
// }






        
    ]
  },
]);