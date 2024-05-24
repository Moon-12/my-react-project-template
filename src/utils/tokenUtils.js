export const setSessionToken = (token) => {
  sessionStorage.setItem("authToken", token);
};

export const getToken = () => {
  return sessionStorage.getItem("authToken");
};

export const removeSessionToken = () => {
  sessionStorage.removeItem("authToken");
};
