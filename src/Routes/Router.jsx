import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tutors from "../Pages/Tutors/Tutors";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import AddTuitions from "../Pages/AddTuitions/AddTuitions";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/MainLayout/DashboardLayout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Homepage,
      },
      {
        path: "/tuitions",
        Component: Tuitions,
      },
      {
        path: "/tutors",
        Component: Tutors,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <DashboardLayout></DashboardLayout>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "/add-tuition",
  //       Component: AddTuitions,
  //     },
  //   ],
  // },
]);
