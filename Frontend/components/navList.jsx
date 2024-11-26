import styles from "./navList.module.css";

export default function NavList() {
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <a className={styles.navElement} href="">
            Home
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="">
            About
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="">
            Contact
          </a>
        </li>
        <li>
          <a className={styles.navElement} href="">
            Profile
          </a>
        </li>
      </ul>
    </>
  );
}
