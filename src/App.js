import "./App.css";
import ErrorPage from "./components/ErrorPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RootComp from "./components/RootComp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import User from "./components/User/User";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./components/routes/PrivateRoutes";
import SideMenu from "./components/SideMenu/SideMenu";
import UnderGradProgram from "./components/UnderGradProgram/UnderGradProgram";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComp />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <PrivateRoute />,
          children: [
            {
              path: "landing-page",
              element: <User />,
              children: [
                {
                  path: "undergraduate-programs",
                  element: <UnderGradProgram />,
                },
                { path: "academics", element: <SideMenu /> },
                { path: "study-materials", element: <SideMenu /> },
              ],
            },
          ],
        },
        { path: "/", element: <Home /> },
        { path: "/sign-up", element: <SignUpPage /> },
        { path: "/login", element: <LoginPage /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      {" "}
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
