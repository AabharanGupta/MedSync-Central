import Hero from "./Hero";
import Option from "./Option";
import heropic from "../src/assets/heropic.png";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Hero></Hero>
        <img src={heropic} alt="heropic" className={styles.heropic} />
      </div>
      <Option></Option>
    </>
  );
}
