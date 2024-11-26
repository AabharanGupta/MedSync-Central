import styles from "./DoctorMenu.module.css";
import doctor from "../src/assets/doctor.png";
export default function DoctorMenu() {
  return (
    <>
      <div className={styles.mainCatalog}>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
        <div className={styles.card}>
          <img src={doctor} className={styles.doc} />
          <div className={styles.name}>Dr. Vinay Sharma</div>
          <div className={styles.field}>Neurologist</div>
          <a href="" className={styles.extLink}>
            Link
          </a>
        </div>
      </div>
    </>
  );
}
