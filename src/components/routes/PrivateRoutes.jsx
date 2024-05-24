import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  let authToken = sessionStorage.getItem("authToken");
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
