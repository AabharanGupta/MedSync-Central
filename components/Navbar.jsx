import logo from "../src/assets/logo.png";
import styles from "./NavBar.module.css";
import NavList from "./navList.jsx";
export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <NavList></NavList>
      </nav>
    </>
  );
}
