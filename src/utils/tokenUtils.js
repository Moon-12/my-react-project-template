import { jwtDecode } from "jwt-decode";

const authTokenKey = "authToken";

export const setSessionToken = (token) => {
  sessionStorage.setItem(authTokenKey, token);
};

export const getSessionLoginResponse = () => {
  const accessToken = sessionStorage.getItem(authTokenKey);
  let decodedToken;
  if (accessToken) {
    decodedToken = jwtDecode(accessToken);
  }
  return decodedToken;
};

export const checkLoggedIn = (expiryTime) => {
  const currentTime = Date.now();
  const timeRemaining = expiryTime * 1000 - currentTime;

  if (timeRemaining <= 0) {
    return { isLoggedIn: false, timeRemaining: 0 };
  } else {
    return { isLoggedIn: true, timeRemaining };
  }
};

export const removeSessionToken = () => {
  sessionStorage.removeItem(authTokenKey);
};
