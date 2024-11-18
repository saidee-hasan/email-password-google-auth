import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";
import ForgotPassword from "../components/ForgotPassWord/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [

      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/forgot",
        element: <ForgotPassword/>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
    ],
  },
]);
export default router;
