import "./App.css";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RootComp from "./components/RootComp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import User from "./components/User/User";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComp />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/user", element: <User /> },
        { path: "/sign-up", element: <SignUpPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
