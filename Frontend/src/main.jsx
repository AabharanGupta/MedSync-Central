import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "../components/Home.jsx";
import MedicalRecord from "../components/MedicalRecord.jsx";
import NavBar from "../components/Navbar.jsx";
import DoctorMenu from "../components/DoctorMenu.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/medicalrecords",
        element: <MedicalRecord />,
      },
      {
        path: "/doctors",
        element: <DoctorMenu />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
