import styles from "./navList.module.css";

export default function NavList() {
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navElement} href="./home">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="./about">
            About
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="./contact">
            Contact
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="./profile">
            Profile
          </a>
        </li>
      </ul>
    </>
  );
}
