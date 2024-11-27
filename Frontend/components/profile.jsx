import user from "../src/assets/user.png";
import styles from "./profile.module.css";
export default function Profile() {
  return (
    <>
      <div className={styles.designContainer}>
        <div className={styles.mainContainer}>
          <img src={user} className={styles.user} />
          <div className={styles.info}>
            <div className={styles.name}>JoeDane123</div>
            <div className={styles.infoLane}>Name : Joe Dane</div>
            <div className={styles.infoLane}>DOB : 22/02/2003</div>
            <div className={styles.infoLane}>Sex : Male</div>
            <div className={styles.infoLane}>Contact Info : +936xxxxxx9</div>
            <div className={styles.infoLane}>
              Address : 123, Budh Bazaar , Moradabad, Uttar Pradesh
            </div>
            <div className={styles.infoLane}>
              Emergency Contact : Raju Rastogi 987xxxxxx9
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
