import Option from "./Option";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <>
      <div className={styles.container}>
        <Option></Option>
        <Option></Option>
        <Option></Option>
      </div>
    </>
  );
}
