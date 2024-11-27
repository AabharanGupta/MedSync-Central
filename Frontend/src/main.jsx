import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "../components/Home.jsx";
import MedicalRecord from "../components/MedicalRecord.jsx";
import NavBar from "../components/Navbar.jsx";
import Chatbot from "../components/Chatbot.jsx";
import DoctorMenu from "../components/DoctorMenu.jsx";
import LoginPage from "../components/LoginPage.jsx";
import Setup2FA from "../components/setup2FA";
import Verify2FA from "../components/verify2FA";
import AddMedRecord from "../components/MedRecord.jsx";

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
        path:"/addmedrec",
        element:<AddMedRecord/>,
      },
      {
        path: "/doctors",
        element: <DoctorMenu />,
      },
      {
        path:"/login",
        element:<LoginPage />,
        errorElement:<Error />,
      },
      {
        path:"/setup-2fa",
        element:<Setup2FA />,
        errorElement:<Error />,
      },
      {
          path:"/verify-2fa",
          element:<Verify2FA />,
          errorElement:<Error />,
      },
      {
          path: "/chatbot",
          element: <Chatbot />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
