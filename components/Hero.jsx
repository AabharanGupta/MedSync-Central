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
        <button className={styles.getstarted}>Get Started!</button>
        <button className={styles.chatbtn}>Free Chatbot</button>
      </div>
    </div>
  );
}
