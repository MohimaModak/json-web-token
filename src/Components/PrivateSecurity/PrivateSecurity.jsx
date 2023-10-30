import React, { useContext } from "react";
import { AuthContext } from "../Privarouter/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateSecurity = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateSecurity;
