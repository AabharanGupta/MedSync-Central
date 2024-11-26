import medicalrec from "../src/assets/medrec.png";
import styles from "./MedicalRecord.module.css";
export default function MedicalRecord() {
  return (
    <>
      <div className={styles.iconHead}>
        <div className={styles.heading}>Medical Records</div>
      </div>
      <div className={styles.mainContainer}>
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
          <h2 className={styles.value1}>
            Respiration:<span>16</span>
          </h2>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head1}>Major problems</h1>
          <h2 className={styles.value1}>
            Gastric:<span>24/01/18</span>
          </h2>
          <h2 className={styles.value1}>
            Angina:<span>9/10/20</span>
          </h2>
          <h2 className={styles.value1}>
            headache:<span>19/3/21</span>
          </h2>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head1}>Medical History</h1>
          <h2 className={styles.value1}>
            Allergy: <span>Pencillin</span>
          </h2>
          <h2 className={styles.value1}>
            Surgical Past:<span>Angioplasty</span>
          </h2>
          <h2 className={styles.value1}>
            HEENT:<span>congestion</span>
          </h2>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head1}>Chronic Medication</h1>
          <h2 className={styles.value1}>
            Aspirin: <span>17/8/17</span>
          </h2>
          <h2 className={styles.value1}>
            Nuofen:<span>11/7/18</span>
          </h2>
          <h2 className={styles.value1}>
            Sulfonylureas:<span>30/3/21</span>
          </h2>
        </div>
        <div className={styles.box}>
          <h1 className={styles.head1}>Lab Result</h1>
          <h2 className={styles.value1}>
            WBC: <span>72K/pl</span>
          </h2>
          <h2 className={styles.value1}>
            NEU: <span>24.45K/pl</span>
          </h2>
          <h2 className={styles.value1}>
            LYM:<span>6K/pl</span>
          </h2>
          <h2 className={styles.value1}>
            MONO:<span>112K/pl</span>
          </h2>
        </div>
        <div className={styles.patBox}>
          <h1 className={styles.head1}>Patient Data</h1>
          <h2 className={styles.value1}>
            Name: <span>Jane Doe</span>
          </h2>
          <h2 className={styles.value1}>
            Patient ID:<span>18756</span>
          </h2>
          <h2 className={styles.value1}>
            Blood Group:<span>AB+</span>
          </h2>
          <h1 className={styles.head1}>Contact</h1>
          <h2 className={styles.value1}>
            Address: <span>123 , Abc street , NY ,USA</span>
          </h2>
          <h2 className={styles.value1}>
            Phone:<span>8687678989</span>
          </h2>
          <h2 className={styles.value1}>
            Email:<span>abcwow@gmail.com</span>
          </h2>
          <h1 className={styles.head1}>Insurance Info</h1>
          <h2 className={styles.value1}>
            Insurance:<span>AVIVA insurance</span>
          </h2>
          <h2 className={styles.value1}>
            Insurance ID:<span>87878797665</span>
          </h2>
          <h2 className={styles.value1}>
            Insurance:<span>AVIVA insurance</span>
          </h2>
          <h1 className={styles.head1}>Emergency Contact</h1>
          <h2 className={styles.value1}>
            Name:<span>John Dom</span>
          </h2>
          <h2 className={styles.value1}>
            Phone No:<span>9898766544</span>
          </h2>
          <h2 className={styles.value1}>
            Email:<span>xyz@gmail.com</span>
          </h2>
        </div>
      </div>
    </>
  );
}
