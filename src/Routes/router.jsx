import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import HomeLayouts from "../layouts/HomeLayouts";
import LogIn from "../pages/Auth/LogIn/LogIn";
import Register from "../pages/Auth/Register/Register";
import AuthLayout from "../layouts/AuthLayouts";

// import DashboardLayout from "../layouts/DashboardLayout";
import StudentRoute from "./StudentRoute";
import CreateTution from "../pages/Student/CreateTution/CreateTution";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/DashboardLayout";


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



 // Dashboard Routes (Protected)
      {
        path: "dashboard",
        element: <PrivateRoute> 
           <Dashboard/>
           </PrivateRoute>,
        children: [
            // { path: "profile", element: <PrivateRoute>  <MyProfile /> </PrivateRoute> },
            { path: "new-tuition", element: <PrivateRoute>  <CreateTution/> </PrivateRoute> },
            // { path: "my-payments", element: <Private> <Fade> <MyPayments /></Fade> </Private> },
            // { path: "payment-success", element: <Private> <Fade> <PaymentSuccess /></Fade> </Private> },
            // { path: "my-tuitions", element: <Private> <Fade> <MyTuitions /></Fade> </Private> },
            // { path: "my-tutors", element: <Private> <Fade> <MyTutors /></Fade> </Private> },
            // { path: "applied-tuitions", element: <Private> <Fade> <AppliedTuitions /></Fade> </Private> },
            // { path: "approved-tuitions", element: <Private> <Fade> <ApprovedTuitoins /></Fade> </Private> },
            // { path: "revenue", element: <Private> <Fade> <Revenue /></Fade> </Private> },
            // { path: "admin/manage-users", element: <Private> <Fade> <AdminManageUser /></Fade> </Private> },
            // { path: "admin/manage-applications", element: <Private> <Fade> <AdminManageApplications /></Fade> </Private> },
            
        ],
    },
 






        
    ]
  },
]);