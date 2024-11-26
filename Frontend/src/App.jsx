import NavBar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import heropic from "./assets/heropic.png";
import Menu from "../components/Menu.jsx";
import "./App.css";
export default function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Hero></Hero>
        <img src={heropic} alt="heropic" className="heropic" />
      </div>
      <Menu></Menu>
    </>
  );
}

