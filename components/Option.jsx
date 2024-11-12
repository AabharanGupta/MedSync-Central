import appointment from "../src/assets/bookappointment.png";
import styles from "./Option.module.css";
export default function Option() {
  return (
    <>
      <div className={styles.opt}>
        <img src={appointment} alt="app" className={styles.icon} />
        <div className={styles.label}>Book Appointment</div>
      </div>
    </>
  );
}
