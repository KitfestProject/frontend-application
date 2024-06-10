import PropTypes from "prop-types";
import useAuthStore from "@/store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthRedirect = ({ element }) => {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/user-dashboard");
    }
  }, [token, navigate]);

  return <div>{element}</div>;
};

AuthRedirect.propTypes = {
  element: PropTypes.node.isRequired,
};

export default AuthRedirect;
