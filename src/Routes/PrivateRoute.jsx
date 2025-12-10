import React, { Children } from "react";
import UseAuth from "../Hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = () => {
  const { user, loading } = UseAuth();

  if (loading) {
    <div className="flex flex-col items-center justify-center">
      <span className="loading loading-spinner text-success"></span>
    </div>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return Children;
};

export default PrivateRoute;
