import styles from "./MedBox.module.css";

export default function MedBox() {
  return (
    <>
      <div className={styles.box}>
        <h1 className={styles.head1}>Last Vitals</h1>
        <h2 className={styles.value1}>
          Weight: <span>98kg</span>
        </h2>
        <h2 className={styles.value1}>
          Height:<span>191cm</span>
        </h2>
        <h2 className={styles.value1}>
          Blood Pressure:<span>120/90</span>
        </h2>
        <h2 className={styles.value1}>
          Temperature:<span>36.6c</span>
        </h2>
        <h2 className={styles.value1}>Respiration:</h2>
      </div>
    </>
  );
}
