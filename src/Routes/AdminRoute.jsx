import Forbidden from "../Components/Forbidden/Forbidden";
import Loading from "../Components/Loading/Loading";
import useAuth from "../hook/useAuth";
import useRole from "../hook/useRole";

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'Admin') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default AdminRoute;