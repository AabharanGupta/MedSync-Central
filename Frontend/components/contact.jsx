import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>Contact us</div>
        <div className={styles.content}>
          We’re here to help! If you have any questions, feedback, or need
          support with Medsync Central, feel free to reach out to us.
        </div>
        <div className={styles.subHeading}>Get in Touch</div>
        <div className={styles.content}>
          📍 Office Address: Medsync Central HQ,
        </div>
        <div className={styles.content}>123 HealthTech Avenue,</div>
        <div className={styles.content}>
          Innovation Park, New Delhi, India, 110001
        </div>
        <div className={styles.content}>
          📞 Phone Support: +91-123-456-7890 Available Monday to Friday, 9:00 AM
          to 6:00 PM
        </div>
        <div className={styles.content}>
          📧 Email Support: support@medsynccentral.com
        </div>
        <div className={styles.content}>🌐 Website: www.medsynccentral.com</div>
      </div>
    </>
  );
}
