import styles from "./DoctorMenu.module.css";
import puneet from "../src/assets/Puneet.avif";
import pandhi from "../src/assets/pandhi.png";
import ankur from "../src/assets/ankur.jpg";
import deepak from "../src/assets/deepak.avif";
import jassi from "../src/assets/jassi.jpg";
import panky from "../src/assets/panky.jpg";
export default function DoctorMenu() {
  return (
    <>
      <div className={styles.mainCatalog}>
        <div className={styles.card}>
          <img src={puneet} className={styles.doc} />
          <div className={styles.name}>Dr. Puneet Phull</div>
          <div className={styles.field}>Neurologist</div>
          <div className={styles.field}>93565 21683</div>
        </div>
        <div className={styles.card}>
          <img src={pandhi} className={styles.doc} />
          <div className={styles.name}>Dr. Pandhi</div>
          <div className={styles.field}>Dermatologist</div>
          <div className={styles.field}>88020 00006</div>
        </div>
        <div className={styles.card}>
          <img src={ankur} className={styles.doc} />
          <div className={styles.name}>Dr Ankur Bansal </div>
          <div className={styles.field}>Urologist</div>
          <div className={styles.field}>88538 07160</div>
        </div>
        <div className={styles.card}>
          <img src={deepak} className={styles.doc} />
          <div className={styles.name}>Dr. Deepak Katyal</div>
          <div className={styles.field}>Cardiologist</div>
          <div className={styles.field}> 1800 102 4647</div>
        </div>
        <div className={styles.card}>
          <img src={jassi} className={styles.doc} />
          <div className={styles.name}>Dr Jaspreet Singh</div>
          <div className={styles.field}>Orthopedic</div>
          <div className={styles.field}>98154 14585</div>
        </div>
        <div className={styles.card}>
          <img src={panky} className={styles.doc} />
          <div className={styles.name}>Dr. Pankaj Kumar Garg</div>
          <div className={styles.field}>General Surgeon</div>
          <div className={styles.field}>1800 102 4647</div>
        </div>
      </div>
    </>
  );
}
