import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import HomeLayouts from "../layouts/HomeLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children:[
        {
index:true,
Component: HomeLayouts
        }, 













        
    ]
  },
]);