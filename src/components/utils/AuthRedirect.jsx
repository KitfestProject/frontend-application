import React from "react";
import useAuthStore from "../../store/UseAuthStore";
import { useNavigate } from "react-router-dom";

const AuthRedirect = ({ element }) => {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  if (token) {
    navigate("/user-dashboard");
  }

  return <div>{element}</div>;
};

export default AuthRedirect;
