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
import MyTution from "../pages/Student/MyTution/MyTution";
import TuitionInfo from "../pages/Student/TuitionInfo/TuitionInfo";

import MyTuitions from "../pages/Student/MyTution/MyTution";
import CreateTuition from "../pages/Student/CreateTution/CreateTution";
import Tuitions from "../pages/Student/Tuitions/Tuitions";
import Applicants from "../pages/Tutor/Applicants/Applicants";
import AdminManageTuitions from "../pages/Admin/AdminManageTuition/AdminManageTuition";
import AppliedTuitions from "../pages/Tutor/AppliedTuitions/AppliedTuitions";
import AdminManageUser from "../pages/Admin/AdminManageUser/AdminManageUser";
import AdminRoute from "./AdminRoute";
import ApprovedTuitions from "../pages/Tutor/ApprovedTuitions/ApprovedTuitions";
import Tutors from "../pages/Tutors/Tutors";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
index:true,
Component: HomeLayouts
        },


        { path: "tuitions",
           element: <Tuitions />
           },
        
        
            { path: "tuitions/:id",
               element: <PrivateRoute>
                 <TuitionInfo />
                  </PrivateRoute> }
                  ,

                   { path: "tutors", 
                    element: <Tutors />
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
            { path: "newtuitions",
               element: <PrivateRoute> 
                 <CreateTuition/>
                  </PrivateRoute> 
                  },


            // { path: "my-payments", element: <Private> <Fade> <MyPayments /></Fade> </Private> },
            // { path: "payment-success", element: <Private> <Fade> <PaymentSuccess /></Fade> </Private> },
            { path: "my-tuitions",
               element: <PrivateRoute>
                <MyTuitions/>
                  </PrivateRoute> },

                   { path: "applicants", 
                    element: <Applicants /> 
                  },
            { path: "applied-tuitions",
               element: <AppliedTuitions />
               },
            { path: "approved-tuitions",
               element: <ApprovedTuitions /> 
              },
            // { path: "revenue", element: <Revenue /> },
            { path: "admin/manage-users", 
              element:
              <AdminRoute>
<AdminManageUser />
              </AdminRoute> ,
              
             },
            // { path: "admin/platform-revenue", element: <AdminSiteRevenue /> },
            { path: "admin/manage-tuitions", 
              element: <AdminManageTuitions /> },
            
        ],
    },
 






        
    ]
  },
]);