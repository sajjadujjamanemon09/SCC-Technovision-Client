import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home";

import Dashboard from "../components/layout/Dashboard/Dashboard/Dashboard";
import Reach from "../page/Reach/Reach";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "reach",
        element: <Reach />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "/",
    //     element: <TaskForm />,
    //   },
    // ],
  },
]);

export default routes;
