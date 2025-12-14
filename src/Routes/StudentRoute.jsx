import { Navigate } from "react-router";
import useRole from "../hook/useRole";


const StudentRoute = ({ children }) => {
  const { role, roleLoading } = useRole();

  if (roleLoading) return <p>Checking role...</p>;
  if (role !== "student") return <Navigate to="/unauthorized" replace />;

  return children;
};

export default StudentRoute;
