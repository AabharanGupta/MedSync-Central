import styles from "./about.module.css";
export default function About() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>About us</div>
        <div className={styles.content}>
          MedSync Central is an innovative centralized database system designed
          to streamline access to medical records, ensuring secure and seamless
          information management for patients and healthcare providers. Its
          user-friendly interface includes an integrated chatbot that offers
          instant recommendations for minor health issues, promoting timely
          self-care and reducing unnecessary clinic visits. The chatbot
          leverages advanced AI to provide accurate, personalized advice while
          directing users to appropriate resources or healthcare professionals
          when needed. MedSync Central prioritizes data privacy and
          interoperability, enabling real-time access across medical
          institutions to improve diagnosis and treatment outcomes. It empowers
          users with accessible, efficient, and reliable healthcare solutions.
        </div>
      </div>
    </>
  );
}
