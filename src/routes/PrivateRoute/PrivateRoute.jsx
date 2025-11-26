// src/routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

function PrivateRoute({ principal, children }) {
  if (!principal) {
    alert("로그인이 필요합니다.");
    return <Navigate to="/account" replace />;
  }
  return children;
}

export default PrivateRoute;
