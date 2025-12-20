import React from 'react';
import useAuth from '../hook/useAuth';
import useRole from '../hook/useRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/Forbidden/Forbidden';

export const StudentRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  }

  if (role !== "Student") {
    return <Forbidden />;
  }

  return children;
};


export default StudentRoute;
