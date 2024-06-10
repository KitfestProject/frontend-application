import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuthStore from "@/store/UseAuthStore";

const ProtectedRoute = ({ element }) => {
  const { token } = useAuthStore();

  return token ? element : <Navigate to="/auth-login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
