import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";


const ProtectedRoute = ({ element }) => {
  const { token } = useAuthStore();

  return token ? element : <Navigate to="/auth-login" />;
};

export default ProtectedRoute;
