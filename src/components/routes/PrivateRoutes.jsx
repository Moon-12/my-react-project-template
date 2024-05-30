// PrivateRoute.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { clearToken } from "../../redux/slice/authSlice";

const PrivateRoute = () => {
  const loginResponse = useSelector((state) => state.auth.loginResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (token) {
    //   try {
    //     const { isLoggedIn, timeRemaining } = loginResponse;
    //     if (isLoggedIn) {
    //       const timer = setTimeout(() => {
    //         dispatch(clearToken());
    //       }, timeRemaining);
    //       return () => clearTimeout(timer);
    //     } else {
    //       dispatch(clearToken());
    //     }
    //   } catch (error) {
    //     dispatch(clearToken());
    //   }
    // }
  }, [loginResponse, dispatch]);

  return loginResponse.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
