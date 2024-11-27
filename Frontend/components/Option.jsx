import appointment from "../src/assets/bookappointment.png";
import chatbot from "../src/assets/robot.png";
import record from "../src/assets/Records.png";
import styles from "./Option.module.css";
export default function Option() {
  return (
    <>
      <div className={styles.container}>
        <a href="./doctors" className={styles.designContainer}>
          <div className={styles.opt}>
            <img src={appointment} alt="app" className={styles.icon} />
            <div className={styles.label}>Book Appointment</div>
          </div>
        </a>
        <a href="./chatbot" className={styles.designContainer}>
          <div className={styles.opt}>
            <img src={chatbot} alt="chat" className={styles.icon} />
            <div className={styles.label}>Chat with Chatbot</div>
          </div>
        </a>
        <a href="./medicalrecords" className={styles.designContainer}>
          <div className={styles.opt}>
            <img src={record} alt="rec" className={styles.icon} />
            <div className={styles.label}>Access medical records</div>
          </div>
        </a>
      </div>
    </>
  );
}
