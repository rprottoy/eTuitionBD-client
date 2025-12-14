import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Tuitions from "../Pages/Tuitions/Tuitions";
import Tutors from "../Pages/Tutors/Tutors";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import PrivateRoute from "./PrivateRoute";

import DashboardLayout from "../Layouts/MainLayout/DashboardLayout/DashboardLayout";
import MyTuitions from "../Pages/Dashboard/MyTuitions/MyTuitions";
import AddTuition from "../Pages/Dashboard/AddTuition/AddTuition";
import AddTutorDetails from "../Pages/Dashboard/AddTutorDetails/AddTutorDetails";

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
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "my-tuitions",
        Component: MyTuitions,
      },
      {
        path: "add-tuition",
        Component: AddTuition,
      },
      {
        path: "add-tutor-details",
        Component: AddTutorDetails,
      },
    ],
  },
]);
