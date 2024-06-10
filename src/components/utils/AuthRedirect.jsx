import PropTypes from "prop-types";
import useAuthStore from "@/store/UseAuthStore";
import { useNavigate } from "react-router-dom";

const AuthRedirect = ({ element }) => {
  const { token } = useAuthStore();
  const navigate = useNavigate();

  if (token) navigate("/user-dashboard");

  return <div>{element}</div>;
};

AuthRedirect.propTypes = {
  element: PropTypes.node.isRequired,
};

export default AuthRedirect;
