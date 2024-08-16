import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" state={location} />;
};
export default PrivateRoute;
