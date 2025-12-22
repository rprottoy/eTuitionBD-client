import React from "react";
import useAuth from "../Hooks/useAuth";

const AdminRoute = () => {
  const { user, loading } = useAuth();

  return <div></div>;
};

export default AdminRoute;
