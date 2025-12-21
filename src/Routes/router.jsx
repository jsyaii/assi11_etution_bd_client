import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import HomeLayouts from "../layouts/HomeLayouts";
import LogIn from "../pages/Auth/LogIn/LogIn";
import Register from "../pages/Auth/Register/Register";
import AuthLayout from "../layouts/AuthLayouts";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/DashboardLayout";
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
import MyPayments from "../pages/Student/MyPayments/MyPayments";
import PaymentSuccess from "../pages/Student/PaymentSuccess/PaymentSuccess";
import MyProfile from "../pages/MyProfile/MyProfile";
import ContractPage from "../pages/Contract/Contract";
import TutorRoute from "./TutorRoute";
import StudentRoute from "./StudentRoute";
import Revenue from "../pages/Tutor/Revenue/Revenue";
import CreateTutor from "../pages/Tutors/NewTutor";
import VerifiedTutor from "../pages/Admin/VerifiedTutor/VerifiedTutor";
import About from "../Components/About/About";
import ErrorPage from "../Components/Error/Error";
import AdminRevenue from "../pages/Admin/AdminRevenue/AdminRevenue";
import AdminDashboard from "../pages/Admin/AdminDashboard/AdminDashboard";
import Chat from "../Components/Chat/Chat";





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
                   { path: "contract", 
                    element: <ContractPage></ContractPage>
                     },
                   { path: "about", 
                    element: <About></About>
                     },
{
path: "/chat", 
                    element: <Chat></Chat>
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

},


  { path: "/newtutor",
  element: <PrivateRoute>
    <TutorRoute>
      <CreateTutor/>,
    </TutorRoute>
    </PrivateRoute> },


    ]
},



 // Dashboard Routes (Protected)
      {
        path: "dashboard",
        element: <PrivateRoute> 
           <Dashboard/>
           </PrivateRoute>,
        children: [
            { path: "profile",
               element: <PrivateRoute>
                  <MyProfile />
                 </PrivateRoute> },

                //  Student Routes
            { path: "newtuitions",
               element: <PrivateRoute>, 
             <StudentRoute>
<CreateTuition/>,
             </StudentRoute>
                 
                  </PrivateRoute> 
                  },


            { 
              path: "my-payments",
               element:
                <PrivateRoute> 
                <StudentRoute>
<MyPayments />,
                </StudentRoute>
                  </PrivateRoute>
                  },


            { path: "payment-success",
               element: <PrivateRoute>
                  <PaymentSuccess />
                   </PrivateRoute>
                    },
            { path: "my-tuitions",
               element: <PrivateRoute>
                <MyTuitions/>
                  </PrivateRoute> },

                   { path: "applicants", 
                    element: 
                    <PrivateRoute>
                       <StudentRoute>
                      <Applicants />,
                    </StudentRoute>
                    </PrivateRoute>
                    
                    
                  },

// Tutor Routes

            { path: "applied-tuitions",
               element:
               <TutorRoute>
                 <AppliedTuitions />,
                </TutorRoute>
              
               },


            { path: "approved-tuitions",
               element:
               <TutorRoute>
<ApprovedTuitions /> ,
               </TutorRoute>
                
              },

            { path: "revenue",
               element:
               <TutorRoute>
 <Revenue />,
               </TutorRoute>
               
               },

 



// Admin Routes
            { path: "admin/manage-users", 
              element:
              <AdminRoute>
<AdminManageUser />
              </AdminRoute> ,
              
             },
            { path: "admin/verify-tutors", 
              element:
              <AdminRoute>
<VerifiedTutor/>,
              </AdminRoute> ,
              
             },




            { path: "admin/platform-revenue", 
              element: <AdminRoute>
 <AdminRevenue/> ,
              </AdminRoute>
             
            },
            { path: "admin/admin-dashboard", 
              element: <AdminRoute>
 <AdminDashboard/>,
              </AdminRoute>
             
            },
           
              { path: "admin/manage-tuitions", 
                element: <AdminRoute> 
                  <AdminManageTuitions /> 
                </AdminRoute> },

            
        ],
    },
 



 {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },


        
    ]
  },
]);