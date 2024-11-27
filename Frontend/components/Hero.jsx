import logo from "../src/assets/logo.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div>
      <img src={logo} alt="logo" className={styles.hero} />
      <div className={styles.byLine}>
        Connecting Care, Streamlining Diagnosis, Empowering Health.
      </div>
      <div className={styles.btnDiv}>
        <a href="./login" className={styles.getstarted}>
          Get Started!
        </a>
        <a href="./chatbot" className={styles.chatbtn}>
          Free Chatbot
        </a>
      </div>
    </div>
  );
}
