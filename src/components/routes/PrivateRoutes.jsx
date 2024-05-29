// PrivateRoute.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { clearToken } from "../../redux/slice/authSlice";
import { checkLoggedIn } from "../../utils/tokenUtils";

const PrivateRoute = () => {
  const token = useSelector((state) => state.auth.loginResponse);
  const dispatch = useDispatch();

  const loginStatus = token
    ? checkLoggedIn(token.exp)
    : { isLoggedIn: false, timeRemaining: 0 };
  useEffect(() => {
    if (token) {
      try {
        const { isLoggedIn, timeRemaining } = loginStatus;
        if (isLoggedIn) {
          const timer = setTimeout(() => {
            dispatch(clearToken());
          }, timeRemaining);
          return () => clearTimeout(timer);
        } else {
          dispatch(clearToken());
        }
      } catch (error) {
        dispatch(clearToken());
      }
    }
  }, [token, dispatch]);

  return loginStatus.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
