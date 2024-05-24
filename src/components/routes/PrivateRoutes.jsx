// PrivateRoute.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { clearToken } from "../../redux/slice/authSlice";

const PrivateRoute = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const expiryTime = decoded.exp * 1000 - Date.now();

        if (expiryTime <= 0) {
          dispatch(clearToken());
        } else {
          const timer = setTimeout(() => {
            dispatch(clearToken());
          }, expiryTime);

          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.log("Token verification failed:", error);
        dispatch(clearToken());
      }
    }
  }, [token, dispatch]);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
