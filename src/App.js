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
import StudyMaterials from "./components/menuItems/StudyMaterials/StudyMaterials";
import Academics from "./components/menuItems/Academics/Academics";
import DegreePrograms from "./components/menuItems/Academics/DegreePrograms/DegreePrograms";
import UnderGradProgram from "./components/menuItems/Academics/DegreePrograms/UnderGradProgram/UnderGradProgram";

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
                  path: "academics",
                  element: <Academics />,
                  children: [
                    {
                      path: "degrees-and-programs",
                      element: <DegreePrograms />,
                      children: [
                        {
                          path: "undergraduate-programs",
                          element: <UnderGradProgram />,
                        },
                      ],
                    },
                    { path: "study-materials", element: <StudyMaterials /> },
                  ],
                },
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
