import NavBar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Home from "../components/Home.jsx";
import { SessionProvider } from "./context/SessionContext.jsx";
export default function App() {
  return (
    <>
    <SessionProvider>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </SessionProvider>
    </>
  );
}
