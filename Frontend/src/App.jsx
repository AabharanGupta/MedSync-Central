import NavBar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Home from "../components/Home.jsx";
export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}
